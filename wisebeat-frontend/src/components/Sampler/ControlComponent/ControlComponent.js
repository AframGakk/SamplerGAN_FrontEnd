import React from "react";
import {Grid} from "@material-ui/core";
import {Knob} from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import './ControlComponent.css';

class ControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    changeValue(val) {
    this.setState({value:val})
  }

    render() {
        return (
            <div className={'controls-container'}>
                <div>
                    <div className={'knob-label'}>Gain</div>
                    <Knob default={80} skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                </div>
                <div>
                    <div className={'knob-label'}>Gain</div>
                    <Knob skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                </div>
            </div>
        );
    }
}

export default ControlComponent;