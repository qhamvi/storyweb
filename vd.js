onload = function() {
    if ('speechSynthesis' in window){
        var synth = speechSynthesis;
        var flag = false;

        //stop when change page ???(not sure)
            if(synth.speaking){ /* stop narration */
                /* for safari */
                flag = false;
                synth.cancel();
            }

        /* references to the buttons */
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');

        /* click event handlers for the buttons */
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

// select voices////
//var synth = window.speechSynthesis;

var voiceSelect = document.querySelector('#voices');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
//end select voices

        function onClickPlay() {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector('#texttospeech').textContent);
                //utterance.voice = synth.getVoices()[0];

                //add voice//
                var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
                    for(i = 0; i < voices.length ; i++) {
                      //if(voices[i].name === 'Google UK English Female') {
                      if(voices[i].name === selectedOption) {
                        utterance.voice = voices[i];
                        break;
                      }
                    }

                voiceSelect.onchange = function(){
                    onClickStop();
                    onClickPlay();
                }
                //and add voice

                utterance.onend = function(){
                    flag = false;
                };
                synth.speak(utterance);

                //fix stop after a while bug
                let r = setInterval(() => {
                  console.log(speechSynthesis.speaking);
                  if (!speechSynthesis.speaking) {
                    clearInterval(r);
                  } else {
                    speechSynthesis.resume();
                  }
                }, 14000);
                //end fix stop after a while bug
            }
            if(synth.paused) { /* unpause/resume narration */
                synth.resume();
            }
        }
        function onClickPause() {
            if(synth.speaking && !synth.paused){ /* pause narration */
                synth.pause();
            }
        }
        function onClickStop() {
           if(synth.speaking){ /* stop narration */
                /* for safari */
                flag = false;
                synth.cancel();
            }
        }
    }
  else {
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('#SpeechSynthesis'));
  }
}