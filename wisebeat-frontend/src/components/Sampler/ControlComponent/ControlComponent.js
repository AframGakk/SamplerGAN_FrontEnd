import React from "react";
import { connect } from "react-redux";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./ControlComponent.css";

import { gainValChanged } from "../../../actions";

class ControlComponent extends React.Component {
  changeValue(val) {
    this.props.gainValChanged(val);
  }

  render() {
    const knobstyle = {
      width: "100px",
      height: "100px"
    };
    return (
      <div className={"controls-container"}>
        <div>
          <div className={"knob-label"}>Gain</div>
          <Knob
            default={this.props.meta.gain}
            skin={skins.s11}
            onChange={this.changeValue.bind(this)}
            min={0}
            max={100}
            value={this.props.meta.gain}
            styles={knobstyle}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // the metadata for what file is selected
  // the file that is selected in the Filetree
  return { meta: state.selectedFileMetadata };
};

// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  gainValChanged: gainValChanged
})(ControlComponent);
