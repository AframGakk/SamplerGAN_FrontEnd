import React from "react";
import {Grid, Button} from "@material-ui/core";
import './SamplerWave.css';

/*

const CVS = document.querySelector('canvas'),
      CTX = CVS.getContext('2d');

class Drum {
  constructor(beat, sample) {
    this.pattern = beat.split('').map(b => b === '1');
    this.sampler = new Tone.Sampler({ 'C3': ASSET_ROOT + sample }, this.init.bind(this))
    this.gain = new Tone.Gain(0.4);
    this.analyser = Tone.context.createAnalyser();
    this.analyser.fftSize = 512;
    this.analyser.minDecibels = -80;
    this.bufferLength = this.analyser.fftSize;
    this.dataArray = new Uint8Array(this.bufferLength);
    this.sampler.connect(this.analyser);
    this.sampler.connect(this.gain);
    this.gain.toMaster();
    this.loaded = false;
    this._tick = 0;
  }

  init() {
    this.loaded = true;
  }

  tickResolution(time) {
    if (this.loaded)
      if (this.pattern[this._tick % this.pattern.length])
        this.sampler.triggerAttack(Math.random() < 0.5 ? 'C3' : 'C#3', time);
    this._tick++;
  }

  getData() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    return this.dataArray;
  }
}


function animate() {
  window.requestAnimationFrame(animate);

  let width = CVS.width = window.innerWidth,
      height = CVS.height = window.innerHeight;

  CTX.fillStyle = '#121212';
  CTX.fillRect(0, 0, width, height);

  let data = [];
  Object.values(drums).forEach((drum, i) => {
    data[i] = drum.getData();
  });

  let len = drums.ch.bufferLength,
      stepX = width / len,
      stepY = height / DRUM_COUNT,
      maxH = height * 0.2,
      cy = stepY * 0.5;

  CTX.lineWidth = 3;
  CTX.lineJoin = 'round';
  CTX.lineCap = 'round';
  CTX.strokeStyle = 'tomato';

  for (let j = 0; j < DRUM_COUNT; j++) {
    let x = stepX * 0.5;
    CTX.beginPath();
    for (let i = 0; i < len; i++) {
      let rat = (data[j][i] - 128.0) / 128.0,
          y = rat * maxH + cy;
      if (i === 0 && j === 0) CTX.moveTo(x, y);
      else CTX.lineTo(x, y);
      x += stepX;
    }
    cy += stepY;
    CTX.stroke();
  }
}

 */
var audioContext;


function drawBuffer( width, height, context, buffer ) {
    var data = buffer.getChannelData( 0 );
    var step = Math.ceil( data.length / width );
    var amp = height / 2;
    for(var i=0; i < width; i++){
        var min = 1.0;
        var max = -1.0;
        for (var j=0; j<step; j++) {
            var datum = data[(i*step)+j];
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        context.fillRect(i,(1+min)*amp,1,Math.max(1,(max-min)*amp));
    }
}


class SamplerWaveVisiulizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    initAudio() {
        var audioRequest = new XMLHttpRequest();
        audioRequest.open("GET", "./KICK.wav", true);
        audioRequest.responseType = "arraybuffer";
        audioRequest.onload = function() {
            audioContext.decodeAudioData( audioRequest.response,
                function(buffer) {
                    var canvas = document.getElementById("wave-canvas");
                    drawBuffer( canvas.width, canvas.height, canvas.getContext('2d'), buffer );
                } );
        }
        audioRequest.send();
    }

    componentDidMount() {
        //this.initAudio();
        var context;




        //window.AudioContext = window.AudioContext||window.webkitAudioContext;
        context = new AudioContext();

        this.setState({context: context})
    }

    onButtonClick = () => {

    };

    render() {
        return (
            <div className={'sampler-wave-container'}>
                <canvas id={'wave-canvas'}></canvas>
            </div>
        );
    }
}

export default SamplerWaveVisiulizer;