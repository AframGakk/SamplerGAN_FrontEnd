import React from "react";
import {Grid, Switch} from "@material-ui/core";
import {Knob} from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import './EnvelopeComponent.css';

class EnvelopeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attackValue: 0,
            checkedA: false
        };
        this.handleDoubleClick.bind(this);
    }

    changeAttackValue(val) {
        this.setState({attackValue:val})
    }

    changeValue(val) {
        this.setState({attackValue:val})
    }

    handleDoubleClick(label) {
        if (label === 'attack') {
            this.setState({attackValue:0})
        }
    }

    handleSwitch() {


    }

    render() {
        return (
            <div>
                <div>
                    Envelopes
                </div>
                <div className={'envelope-container'}>
                    <div>
                        <div className={'knob-label'}>On/Off</div>
                        <Switch  />
                    </div>

                    <div>
                        <div className={'knob-label'}>Attack</div>
                        <Knob
                            default={80}
                            skin={skins.s11}
                            onChange={this.changeAttackValue.bind(this)}
                            min={0}
                            max={100}
                            value={this.state.attackValue}

                        />
                    </div>
                    <div>
                        <div className={'knob-label'}>Hold</div>
                        <Knob skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                    </div>
                    <div>
                        <div className={'knob-label'}>Deacay</div>
                        <Knob skin={skins.s11} onChange={this.changeValue.bind(this)} min={0} max={100} value={this.state.value}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default EnvelopeComponent;