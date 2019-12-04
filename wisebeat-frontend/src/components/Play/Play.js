import React from 'react';
//import './Studio.css';
import { Grid, Button } from '@material-ui/core';
import FileTreeComponent from '../FileTreeComponent/FileTreeComponent';
import Sampler from '../Sampler/Sampler';
import AudioEngine from '../../audio-engine/AudioEngine';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        //window.AudioContext = window.AudioContext||window.webkitAudioContext;

        var context = new (window.AudioContext || window.webkitAudioContext)();
        this.engine = new AudioEngine(context);
        this.engine.init_sound('./KICK.wav');

    }

    onClickPlayHandle = () => {
        this.engine.play();
    };


    render() {
        const { name, email, text } = this.state;
        return (

            <Button onClick={this.onClickPlayHandle}>Play</Button>

        );
    }
}

export default Play;