"use strict"


const pointer = document.querySelector('.pointer');
const circ = document.querySelector('.circle');
const img = document.querySelector('.pointer img');
const listened = document.querySelector('.listened');
const confidence = document.querySelector('.confidence');
let i=0;


document.querySelector('.wrapper').addEventListener('mousemove', function(event){
  var xPosition=((window.innerWidth)/2-event.pageX)/20, yPosition=((window.innerHeight)/2-event.pageY)/20;
  
  var previousJsStyles = pointer.getAttribute('style');
  pointer.setAttribute('style',previousJsStyles+" transform:translate("+xPosition+"%,"+yPosition+"%);");

});


var speech = new SpeechSynthesisUtterance();
speech.rate = .7;
speech.lang = 'en-US';
speech.pitch = 1;
speech.volume=1;

setTimeout(function(){
  listened.setAttribute('style','letter-spacing:2px; padding-left:2px; opacity:1;');
  setTimeout(function(){
    listened.setAttribute('style',listened.getAttribute('style')+'transition: none;');
  },1200);
},400);

function speakNow(MyText){
  if(MyText!='<pardon>'){
    speech.text = MyText;
  }
  window.speechSynthesis.speak(speech);
  console.log('[SPEAKING] '+speech.text);
  
  speech.onend = null;
}







var recognition = new window.webkitSpeechRecognition();

recognition.onspeechend = function(){
  img.style.animation = "none";
  setTimeout(function(){
    img.style.boxShadow = "none";
  },300);
  setTimeout(function(){
    img.classList.remove('animated');
  },700);
  recognition.stop();
  i++;
}

recognition.onresult = function(e){
  var transcriptText = e.results[0][0].transcript;

  //display-part
  listened.classList.add('nowNotTitle');
  listened.innerHTML = '" '+transcriptText+' "';
  confidence.innerHTML = 'Accuracy: '+Math.trunc((e.results[0][0].confidence)*100)+"%";

  //process-part
  setTimeout(function(){
    propertiesInRecords:
    for(var h in records){
      // if(j==0){
        // debugger;
        for(var pi=0; pi<records[h]['vals'][0].length; pi++){
          // console.log('pi');
          var pgo=0;

          for(var mi=0; mi<records[h]['vals'][0][pi].length; mi++){
            // console.log('mi');
            
            if(transcriptText.search(new RegExp(records[h]['vals'][0][pi][mi], 'i')) != -1){
              pgo++;
            }

            if(pgo == records[h]['vals'][0][pi].length){
              speakNow(records[h]['toBeSpeaked']);
              if(records[h]['action'] != undefined){
                speech.onend = function(){
                  records[h]['action']();
                }
              }
              break propertiesInRecords;
            }


          }
          
        }
        records[h]['vals'][0]
      // }
      for(var j=1; j<records[h]['vals'].length; j++){
        if(transcriptText.search(new RegExp(records[h]['vals'][j], 'i')) != -1){
          speakNow(records[h]['toBeSpeaked']);
          if(records[h]['action'] != undefined){
            speech.onend = function(){
              records[h]['action']();
            }
          }
          break propertiesInRecords;
        }
      }
    }
  },500);

}

pointer.addEventListener('click',function(){
  if(i%2==0){
    pointer.classList.add('animated');
    circ.classList.add('animated');
    setTimeout(function(){
      pointer.classList.remove('animated');
      circ.classList.remove('animated');
      img.removeAttribute('style');
      img.classList.add('animated');
      recognition.start();
    },910);
  }
  else{
    recognition.stop();
    img.style.animation = "none";
    setTimeout(function(){
      img.style.boxShadow = "none";
    },300);
    setTimeout(function(){
      img.classList.remove('animated');
    },700);
  }
  i++;
});

