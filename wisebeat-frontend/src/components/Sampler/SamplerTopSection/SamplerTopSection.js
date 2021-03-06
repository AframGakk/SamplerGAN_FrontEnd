import React from "react";
import { connect } from "react-redux";
import { Divider, IconButton, Menu, MenuItem, Button } from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./SamplerTopSection.css";
import AudioEngine from "../../../AudioEngine/AudioEngine";
import Recorder from "recorder-js";

import audiomock from "../../../mockdata/audiomock";

import { fetchGenerateSampleData } from "../../../actions/";

class SamplerTopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      anchorEl: null
    };

    // TODO: Remove hardcoded values
    this.props.meta.filters = false;
    this.props.meta.envelopes = false;
    this.props.meta.fx = false;

    this.props.meta.gain = 100.0;
    this.props.meta.cutoff = 1000;
    this.props.meta.attack = 0;
    this.props.meta.hold = 1;
    this.props.meta.decay = 0;
    this.props.meta.reso = 0;
    this.props.meta.delay = 0;
    this.props.meta.reverb = 0;
    this.engine = new AudioEngine();
  }

  changeAudioMeta = meta => {
    this.engine.setMetaValues(meta);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onClickPlayHandle = () => {
    this.engine.play(this.props.meta, this.props.newFileData);
  };

  onDownloadClick = () => {
    this.engine.download(this.props.meta);
  };

  render() {
    this.engine = new AudioEngine();
    this.engine.init_sound(audiomock);
    const ITEM_HEIGHT = 48;
    const open = Boolean(this.state.anchorEl);
    //console.log(this.props);
    return (
      <div className={"sampler-top-section-container"}>
        <div className={"sampler-top-section-left"}>
          <IconButton onClick={this.onClickPlayHandle} color={"secondary"}>
            <PlayArrow />
          </IconButton>
          <Divider orientation={"vertical"} />
          <div className={"filename-container"}>
            {/* Here is the filename and type rendering from the props */}
            <div className={"filename"}>{this.props.file.name}</div>
            {/*<div className={"filetype"}>{this.props.file.sound_type}</div>*/}
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.fetchGenerateSampleData()}
        >
          Generate file
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // the file that is selected in the Filetree
  //console.log(state);
  return {
    file: state.selectedFile,
    meta: state.selectedFileMetadata,
    newFileData: state.selectedFileSoundDataReducer.newFileData
  };
};

// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  fetchGenerateSampleData: fetchGenerateSampleData
})(SamplerTopSection);
