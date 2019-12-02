import React from "react";
import { connect } from "react-redux";
import {
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./SamplerTopSection.css";

class SamplerTopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      anchorEl: null
    };
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const ITEM_HEIGHT = 48;
    const open = Boolean(this.state.anchorEl);
    //console.log(this.props);
    return (
      <div className={"sampler-top-section-container"}>
        <div className={"sampler-top-section-left"}>
          <IconButton color={"secondary"}>
            <PlayArrow />
          </IconButton>
          <Divider orientation={"vertical"} />
          <div className={"filename-container"}>
            {/* Here is the filename and type rendering from the props */}
            <div className={"filename"}>{this.props.file.name}</div>
            <div className={"filetype"}>{this.props.file.sound_type}</div>
          </div>
        </div>
        <div className={"sampler-top-section-right"}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            <MenuItem key={"value1"} onClick={this.handleClose}>
              Value1
            </MenuItem>
            <MenuItem key={"value2"} onClick={this.handleClose}>
              Value2
            </MenuItem>
          </Menu>
          <Divider orientation={"vertical"} />
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  // Configure connect to tell redux store that we wanna get
  // the file that is selected in the Filetree
  return { file: state.selectedFile };
};

// connect to Provider -> ReduxStore
export default connect(mapStateToProps)(SamplerTopSection);
