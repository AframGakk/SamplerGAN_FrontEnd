import React from "react";
import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./FxComponent.css";

import {
  fxValChanged,
  reverbValChanged,
  delayValChanged
} from "../../../actions";

class FxComponent extends React.Component {
  changeReverbValue(val) {
    this.props.reverbValChanged(val);
  }

  changeDelayValue(val) {
    this.props.delayValChanged(val);
  }

  handleSwitch = event => {
    const val = event.target.checked;
    this.props.fxValChanged(val);
  };

  render() {
    return (
      <div>
        <div>FX</div>
        <div className={"fx-container"}>
          <div>
            <div className={"knob-label"}>On/Off</div>
            <Switch onChange={this.handleSwitch} />
          </div>

          <div>
            <div className={"knob-label"}>Reverb</div>
            <Knob
              default={this.props.meta.reverb}
              skin={skins.s11}
              onChange={this.changeReverbValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.reverb}
            />
          </div>
          <div>
            <div className={"knob-label"}>Delay</div>
            <Knob
              default={this.props.meta.delay}
              skin={skins.s11}
              onChange={this.changeDelayValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.delay}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // the file that is selected in the Filetree
  return { meta: state.selectedFileMetadata };
};

export default connect(mapStateToProps, {
  fxValChanged: fxValChanged,
  reverbValChanged: reverbValChanged,
  delayValChanged: delayValChanged
})(FxComponent);
