var ctx = null;
var sound = null;
var createBuffer = require("audio-buffer-from");

class AudioEngine {
  constructor() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.init_sound("./bass.wav");

    //ctx = contxt;
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

    // create filter node
    this.filter = ctx.createBiquadFilter();
    this.filter.frequency.value = 0;
    this.filter.type = "allpass";

    // delay node
    this.delayNode = ctx.createDelay(this.delayValue);
  }

  init_sound(url) {
    /*
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
    */
    //sound = url;

    /*
    sound = arrayToAudioBuffer({
      context: ctx,
      data: url
    });
    */

    var arr = new Float32Array(url);
    sound = createBuffer(arr, { sampleRate: 16000 });

    /*
    ctx.decodeAudioData(abuffer, function(buffer) {
        sound = buffer;
      }, function (err) {
        console.log('Error decoding audio');
        console.log(err);
      });

     */
  }

  // value [0.0, 1.0]
  setGain(value) {
    value = value / 100;
    console.log(value);
    this.gainNode.gain.value = value * value; // exponential gain sounds nicer
  }

  setMetaValues(meta) {
    console.log(meta);
    this.gainValue = meta.gain;
  }

  play(metadata) {
    console.log(metadata);
    var source = ctx.createBufferSource();
    source.buffer = sound;
    var sample_len = source.buffer.length / source.buffer.sampleRate;

    // source pipe
    source
      .connect(this.gainNode)
      .connect(this.filter)
      .connect(ctx.destination);

    // gain connect
    //source = source.connect(this.gainNode);
    //this.gainNode.connect(ctx.destination);
    var gain = metadata.gain / 100.0;
    this.gainNode.gain.value = gain; //this.gainValue;

    if (metadata.filters) {
      this.filter.frequency.value = metadata.cutoff;
      this.filter.type = "lowpass";
    } else {
      this.filter.type = "allpass";
    }

    if (metadata.envelopes) {
      //var decayOutput =
      var now = ctx.currentTime;
      this.gainNode.gain.cancelScheduledValues(now);

      // Attack
      // Anchor beginning of ramp at current value.
      this.gainNode.gain.setValueAtTime(0, now);
      // Ramp up
      this.gainNode.gain.linearRampToValueAtTime(gain, now + metadata.attack);
      // Decay
      // Ramp down
      var decayTime = null;
      sample_len - metadata.attack < metadata.decay
        ? (decayTime = metadata.attack)
        : (decayTime = sample_len - metadata.decay);

      //console.log(sample_len);

      //console.log(decayTime);

      this.gainNode.gain.linearRampToValueAtTime(0, decayTime);
    }

    if (metadata.fx) {
      // delay node
      //var delayNode = ctx.createDelay(this.delayValue);
      var feedback = ctx.createGain();
      feedback.gain.value = 0.4;
      this.delayNode.connect(feedback);
      feedback.connect(this.delayNode);
    } else {
      this.delayNode.value = 0;
    }

    //main connect
    //source.connect(this.gainNode);
    //source.connect(ctx.destination);

    // start audio
    source.start(0);
  }
}

export default AudioEngine;
