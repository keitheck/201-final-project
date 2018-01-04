'use strict';

var sequencer = new Nexus.Sequencer('#target',{
 'size': [400,90],
 'mode': 'toggle',
 'rows': 3,
 'columns': 16
})

//set the transport to repeat
Tone.Transport.loopStart = 0;
Tone.Transport.loop = true;
Tone.Transport.loopEnd = "4m";

//start/stop the  global transport
document.querySelector('.playpause').addEventListener('change', function(e){

  if (e.target.checked){
    Tone.Transport.start('+0.1');
    sequencer.start();

  } else {
    Tone.Transport.stop();
    sequencer.stop();

  }
});

var kick = new Tone.MembraneSynth().toMaster()

var step
sequencer.on('step',function(v) {

  step = v;
  console.log(step);
  if(step[0] === 1) {

    kick.triggerAttackRelease("C1","4n");
  };



})