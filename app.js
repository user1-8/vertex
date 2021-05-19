"use strict"


const pointer = document.querySelector('.pointer');
const circ = document.querySelector('.circle');
const img = document.querySelector('.pointer img');
const listened = document.querySelector('.listened');
const confidence = document.querySelector('.confidence');
let i=0;
var speech = new SpeechSynthesisUtterance();
speech.rate = .8;
speech.pitch = 1;
speech.volume=1;
for(let u=0;u<window.speechSynthesis.getVoices().length;u++){
  if(window.speechSynthesis.getVoices()[u]['voiceURI'].search("David")!=-1){
    speech.voice=window.speechSynthesis.getVoices()[u];
  }
}
setTimeout(function(){
  for(let u=0;u<window.speechSynthesis.getVoices().length;u++){
    if(window.speechSynthesis.getVoices()[u]['voiceURI'].search("David")!=-1){
      speech.voice=window.speechSynthesis.getVoices()[u];
    }
  }
},300);

function speakNow(MyText){
  if(MyText!='<pardon>'){
    speech.text = MyText;
  }
  window.speechSynthesis.speak(speech);
  console.log('[SPEAKING] '+speech.text);
  
  speech.onend = null;
}

// below is to listen to user by clicking space-bar
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    img.click();
  }
}


// below function accesses the url variables
let getUrlParams = (url) => {
  var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1); 
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


if(window.mobileAndTabletCheck()==true && getUrlParams(window.location.href).mob == undefined){ // device is tablet/mobile
  if(window.location.search == ""){
    window.location.href = window.location.href+"?mob";
  }else{
    window.location.href = window.location.href+"&mob";
  }
}

if(getUrlParams(window.location.href).mob == undefined){
  document.querySelector('.wrapper').addEventListener('mousemove', function(event){
    var xPosition=((window.innerWidth)/2-event.pageX)/20, yPosition=((window.innerHeight)/2-event.pageY)/20;
    
    var previousJsStyles = pointer.getAttribute('style');
    pointer.setAttribute('style',previousJsStyles+" transform:translate("+xPosition+"%,"+yPosition+"%);");
  });
}




setTimeout(function(){
  listened.setAttribute('style','letter-spacing:2px; padding-left:2px; opacity:1;');
  setTimeout(function(){
    listened.setAttribute('style',listened.getAttribute('style')+'transition: none;');
  },1200);
},400);





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
      for(var pi=0; pi<records[h]['vals'][0].length; pi++){
        // console.log('pi');
        var pgo=0;

        for(var mi=0; mi<records[h]['vals'][0][pi].length; mi++){
          // console.log('mi');
          
          if(transcriptText.search(new RegExp(records[h]['vals'][0][pi][mi], 'i')) != -1){
            pgo++;
          }

          if(pgo == records[h]['vals'][0][pi].length){

            speakNow(records[h]['toBeSpeaked'][Math.floor(Math.random()*(records[h]['toBeSpeaked'].length))]);

            if(records[h]['action'] != undefined){
              speech.onend = function(){
                if(records[h]['needTranscript'] != undefined){
                  if(records[h]['needTranscript'] == true){
                    records[h]['action'](transcriptText);
                  }
                }else{
                  records[h]['action']();
                }
              }
            }
            break propertiesInRecords;
          }


        }
        
      }
      // records[h]['vals'][0]

      for(var j=1; j<records[h]['vals'].length; j++){
        if(transcriptText.search(new RegExp(records[h]['vals'][j], 'i')) != -1){
          speakNow(records[h]['toBeSpeaked']);
          if(records[h]['action'] != undefined){
            speech.onend = function(){
              if(records[h]['needTranscript'] != undefined){
                if(records[h]['needTranscript'] == true){
                  records[h]['action'](transcriptText);
                }
              }else{
                records[h]['action']();
              }
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

