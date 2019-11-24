import React from "react";
import {Grid, Switch} from "@material-ui/core";
import {Knob} from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import './FxComponent.css';

class FxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: false
        };
    }

    changeValue(val) {
    this.setState({value:val})
  }

    handleSwitch() {


    }

    render() {
        return (
            <div>
                <div>
                    FX
                </div>
                <div className={'fx-container'}>
                    <div>
                        <div className={'knob-label'}>On/Off</div>
                        <Switch/>
                    </div>

                    <div>
                        <div className={'knob-label'}>Reverb</div>
                        <Knob default={80} skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                    </div>
                    <div>
                        <div className={'knob-label'}>Delay</div>
                        <Knob skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default FxComponent;