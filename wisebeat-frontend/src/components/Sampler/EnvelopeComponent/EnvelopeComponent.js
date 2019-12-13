import React from "react";
import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./EnvelopeComponent.css";

import {
  envelopesValChanged,
  attackValChanged,
  holdValChanged,
  decayValChanged
} from "../../../actions";

class EnvelopeComponent extends React.Component {
  // Getting attack knobs value and sending it into action creator
  changeAttackValue(val) {
    this.props.attackValChanged(val);
  }

  // Getting hold knobs value and sending it into action creator
  changeHoldValue(val) {
    this.props.holdValChanged(val);
  }
  // Getting decay knobs value and sending it into action creator
  changeDecayValue(val) {
    this.props.decayValChanged(val);
  }

  // Getting envelope switch value and sending it into action creator
  handleSwitch = event => {
    const val = event.target.checked;
    this.props.envelopesValChanged(val);
  };

  render() {
    return (
      <div>
        <div>Envelopes</div>
        <div className={"envelope-container"}>
          <div>
            <div className={"knob-label"}>On/Off</div>
            <Switch onChange={this.handleSwitch} />
          </div>

          <div>
            <div className={"knob-label"}>Attack</div>
            <Knob
              default={this.props.meta.attack}
              skin={skins.s11}
              onChange={this.changeAttackValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.attack}
            />
          </div>
          <div>
            <div className={"knob-label"}>Hold</div>
            <Knob
              default={this.props.meta.hold}
              skin={skins.s11}
              onChange={this.changeHoldValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.hold}
            />
          </div>
          <div>
            <div className={"knob-label"}>Deacay</div>
            <Knob
              default={this.props.meta.decay}
              skin={skins.s11}
              onChange={this.changeDecayValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.decay}
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

// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  envelopesValChanged: envelopesValChanged,
  attackValChanged: attackValChanged,
  holdValChanged: holdValChanged,
  decayValChanged: decayValChanged
})(EnvelopeComponent);
