import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./ControlComponent.css";

import { gainValChanged } from "../../../actions";

class ControlComponent extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  */

  changeValue(val) {
    //this.setState({ value: val });
    this.props.gainValChanged(val);
    //console.log(val);
  }

  render() {
    //const gain = this.props.meta.gain;
    //console.log(this.props.meta[0].gain);
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
          />
        </div>
        {/*        <div>
          <div className={"knob-label"}>Gain</div>
          <Knob
            skin={skins.s11}
            onChange={this.changeValue.bind(this)}
            min={0}
            max={100}
            value={this.state.value}
          />
</div>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // the metadata for what file is selected
  //console.log("Inside ControlComp mapStateToProps");
  //console.log(state);
  return { meta: state.selectedFileMetadata };
};

// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  gainValChanged: gainValChanged
})(ControlComponent);
