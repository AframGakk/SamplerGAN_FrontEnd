var ctx = null;
var sound = null;


class AudioEngine {

  constructor(contxt) {
    ctx = contxt;
    this.source = ctx.createBufferSource();

    this.envelope = false;
    this.filter = false;
    this.fx = false;

    this.gainValue = 1.0;
    this.attackTime = 0.3;
    this.holdValue = this.gainValue;
    this.decayValue = 2.0;
    this.frequencyValue = 1000;
    this.delayValue = 1.0;

    // gain node create
    this.gainNode = ctx.createGain();
    this.gainNode.gain.value = 1.0;

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
    var sample_len = source.buffer.length/source.buffer.sampleRate;

    // gain connect
    source.connect(this.gainNode);
    this.gainNode.connect(ctx.destination);
    this.gainNode.gain.value = this.gainValue;

    if (this.envelope) {

      //var decayOutput =
      var now = ctx.currentTime;
      this.gainNode.gain.cancelScheduledValues( now );

      // Attack
      // Anchor beginning of ramp at current value.
      this.gainNode.gain.setValueAtTime(0, now);
      // Ramp up
      this.gainNode.gain.linearRampToValueAtTime(this.holdValue, now + this.attackTime);
      // Decay
      // Ramp down
      var decayTime = null;
      ((sample_len - this.attackTime) < this.decayValue) ? decayTime = this.attackTime : decayTime = sample_len - this.decayValue;


      console.log(decayTime);

      this.gainNode.gain.linearRampToValueAtTime(0, decayTime);
    }

    if (this.filter) {
      var filter = ctx.createBiquadFilter();
      filter.frequency.value = this.frequencyValue;
      filter.type = 'lowpass';
      // filter connect
      source.connect(filter);
      this.filter.connect(ctx.destination);
    }

    if (this.fx) {
      // delay node
      var delayNode = ctx.createDelay(this.delayValue);
      // delay connect
      source.connect(delayNode);
      delayNode.connect(ctx.destination);
    }

    //main connect
    //source.connect(ctx.destination);

    // start audio
    source.start(0);
  }
}

export default AudioEngine;