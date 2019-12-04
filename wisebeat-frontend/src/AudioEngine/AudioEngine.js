var ctx = null;
var sound = null;


class AudioEngine {

  constructor(contxt) {
    ctx = contxt;

    this.source = ctx.createBufferSource();

    // gain node create
    //this.gainNode = ctx.createGain();
    //this.gainNode.gain.value = 1.0;

    // delay node
    //this.delayNode = ctx.createDelay(0.9);

    //this.filter = ctx.createBiquadFilter();
    //this.filter.frequency.value = 5000;
    //this.filter.type = 'lowpass';
  }

  init_sound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      ctx.decodeAudioData(request.response, function(buffer) {
        sound = buffer;
      }, function (err) {
        console.log('Error decoding audio');
        console.log(err);
      });
    };
    request.send();
  }

  // value [0.0, 1.0]
  setGain(value) {
    this.gainNode.gain.value = value * value // exponential gain sounds nicer
  }


  play() {
    var source = ctx.createBufferSource();
    source.buffer = sound;

    // gain connect
    //source.connect(this.gainNode);
    //this.gainNode.connect(ctx.destination);

    // filter connect
    //source.connect(this.filter);
    //this.filter.connect(ctx.destination);

    // delay connect
    //source.connect(this.delayNode);
    //this.delayNode.connect(ctx.destination);

    //main connect
    source.connect(ctx.destination);

    // start audio
    source.start(0);
  }
}

export default AudioEngine;