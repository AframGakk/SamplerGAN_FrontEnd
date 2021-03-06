import React from "react";
import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./FilterComponent.css";

import {
  filtersValChanged,
  cutoffValChanged,
  resoValChanged
} from "../../../actions";

class FilterComponent extends React.Component {
  changeCutoffValue(val) {
    this.props.cutoffValChanged(val);
  }

  changeResoValue(val) {
    this.props.resoValChanged(val);
  }

  handleSwitch = event => {
    const val = event.target.checked;
    this.props.filtersValChanged(val);
  };

  render() {
    return (
      <div>
        <div>Filters</div>
        <div className={"filter-container"}>
          <div>
            <div className={"knob-label"}>On/Off</div>
            <Switch onChange={this.handleSwitch} />
          </div>

          <div>
            <div className={"knob-label"}>Cutoff</div>
            <Knob
              default={this.props.meta.cutoff}
              skin={skins.s11}
              onChange={this.changeCutoffValue.bind(this)}
              min={0}
              max={10000}
              value={this.props.meta.cutoff}
            />
          </div>
          <div>
            <div className={"knob-label"}>Reso.</div>
            <Knob
              default={this.props.meta.reso}
              skin={skins.s11}
              onChange={this.changeResoValue.bind(this)}
              min={0}
              max={100}
              value={this.props.meta.reso}
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
  filtersValChanged: filtersValChanged,
  cutoffValChanged: cutoffValChanged,
  resoValChanged: resoValChanged
})(FilterComponent);
