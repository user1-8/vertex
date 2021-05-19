'use strict'

function whereNameIs(nameParam){
  for(let oi in records){
    if(records[oi]['name'] != undefined){
      if(records[oi]['name']==nameParam){
        return oi;
      }
    }
  }
}

var bDaySong = new Audio('https://drive.google.com/uc?id=1IGmG2bb_B-_5hJpUFWDy-pgA0gtFK0tA');

var dynamiteSong = new Audio('https://drive.google.com/uc?id=1pimXm8lSPc41yX9GVC_dgVmA3KYwoKJd');

var intervalWaterDrink;

var openSites = [];

var records = {
  
  1:{
    needTranscript: true,

    vals: [
      [['search','on','youtube']],
      
    ],

    toBeSpeaked: ["Sure sir",'ok sir','sure Mr. Adam'],

    action: function(transcript){
      
      let searchQuery = transcript.replace(/please search the youtube for/i,'').replace(/search the youtube for/i,'').replace(/please search youtube for/i,'').replace(/search youtube for/i,'').replace(/please search for/i,'').replace(/search for/i,'').replace(/on youtube/i,'').replace(/search/i,'').replace(/for/i,'');

      if(searchQuery.replace(/ /g,"") != ""){
        openSites[openSites.length] = window.open("https://www.youtube.com/results?search_query=" + searchQuery);
      }
    }
  },

  2:{
    needTranscript: true,

    vals: [
      [['search','for']],
      
    ],

    toBeSpeaked: ["Sure sir",'ok sir','sure Mr. Adam'],

    action: function(transcript){
      
      let searchQuery = transcript.replace(/please search the internet for/i,'').replace(/search the internet for/i,'').replace(/please search google for/i,'').replace(/search google for/i,'').replace(/please search internet for/i,'').replace(/search internet for/i,'').replace(/please search for/i,'').replace(/search for/i,'').replace(/search/i,'').replace(/for/i,'');

      if(searchQuery.replace(/ /g,"") != ""){
        openSites[openSites.length] = window.open("https://www.google.com/search?q=" + searchQuery);
      }
    }
  },

  3: {
    vals: [
      [['Who','you'],['who','vertex'],['introduce','yourself'],['tell','about','yourself']],
      'Are you vertex'
    ],

    toBeSpeaked: ["I am Vertex, a kind of AI system made by Mr. Adam, and a small real life alternative of Iron man's jarvis. I assist Mr. Adam in his daily work, In other words, you can call me his P.A. or Personal Assistant."]
  },

  4: {
    vals: [
      [['what','can','you','do'],['what','can','you','perform'],['tell','your','abilites']]
      
    ],

    toBeSpeaked: ["I can do anything you like, just ask."]
  },

  5: {
    vals: [
      [['play','Birthday'],['sing','birthday']],
      
    ],

    toBeSpeaked: ["Playing the birthday song"],

    action: function(){
      bDaySong.play();
    },
  },

  6: {
    vals: [
      [['stop','Birthday'],['pause','birthday']],
      
    ],

    toBeSpeaked: ["Pausing the birthday song"],

    action: function(){
      bDaySong.pause();
    },
  },
  
  7:{
    vals: [
      [['stop','water','reminder'],['deactivate','water','reminder'],['stop','water','program'],['deactivate','water','program']],
      
    ],

    toBeSpeaked: ["Deactivating the water drink program."],

    action: function(){
      clearInterval(intervalWaterDrink);
    }
  },

  8: {
    vals: [
      [['activate','water','reminder'],['activate','water','program'],['start','water','program'],['start','water','reminder'],['setup','water','reminder'],['setup','water','program'],['set','up','water','reminder'],['set','up','water','program']],
      
    ],

    toBeSpeaked: ["Setting up the drink water reminder with and interval of 15 minutes. Do not refresh or close this tab or you'll deactivate the Drink Water program."],

    action: function(){
      intervalWaterDrink = setInterval(function(){
        speakNow("Hey Mr. Adam, time to drink water now. Go and drink.");
      },15*60000);
    }
  },

  9: {
    vals: [
      [['bye'],['quit'],['exit']],
      'meet you later','see you later'
    ],

    toBeSpeaked: ["See you later Mr. Adam. Good Bye."],

    action: function(){
      window.close();
    }
  },

  10:{
    vals: [
      [['say','again'],['speak','again'],['repeat','again']],
      'pardon','please repeat'
    ],

    toBeSpeaked: ['<pardon>'],
  },

  11:{
    vals: [
      [['who','made','you'],['whom','made','you'],['who','created','you'],['whom','created','you']],
      
    ],

    toBeSpeaked: ['It is my master Mr. Adam Satish who worked 8 hours per day to give me life.']
  },

  12:{
    vals: [
      [['tell','me','joke']],
      'make me laugh',
    ],

    toBeSpeaked: [jokes[Math.floor((Math.random())*(jokes.length))+1]["setup"]],

    action: function(){
      let MyThis = this;
      for(var q=0; q<jokes.length; q++){
        if(jokes[q]["setup"] == MyThis.toBeSpeaked[0]){
          speakNow(jokes[q]["punchline"]);
          MyThis.toBeSpeaked[0] = jokes[Math.floor((Math.random())*(jokes.length))+1]["setup"];
          break;
        }
        }
    }

  },

  13:{
    vals: [
      [['who','adam']],
      'Do you know Adam','adam'
    ],

    toBeSpeaked: ['Mr. Adam is my God, Mr. Adam is my father, Mr. Adam is my GodFather']
  },

  14:{
    vals: [
      [['show','keep'],['open','keep']],
      
    ],

    toBeSpeaked: ['Showing your google keep'],

    action: function(){
      openSites[openSites.length] = window.open('http://keep.google.com/');
    }
  },

  15:{
    vals: [
      [['show','whatsapp'],['open','whatsapp']],
      
    ],

    toBeSpeaked: ['Opening Whatsapp'],

    action: function(){
      openSites[openSites.length] = window.open('https://web.whatsapp.com/');
    }
  },

  16:{
    vals: [
      [['show','youtube','studio'],['open','youtube','studio']],
      
    ],

    toBeSpeaked: ['Opening YouTube Studio'],

    action: function(){
      openSites[openSites.length] = window.open('https://studio.youtube.com/');
    }
  },

  17:{
    vals: [
      [['show','youtube'],['open','youtube']],
      
    ],

    toBeSpeaked: ['Opening YouTube'],

    action: function(){
      openSites[openSites.length] = window.open('https://www.youtube.com/');
    }
  },

  18:{
    vals: [
      [['open','type racer'],['open','typing racer'],['open','typeracer']],
      
    ],

    toBeSpeaked: ['Opening Type Racer'],

    action: function(){
      openSites[openSites.length] = window.open('https://play.typeracer.com/');
    }
  },

  19:{
    vals: [
      [['take','typing test'],['open','typing test'],['open','typing master']],
      
    ],

    toBeSpeaked: ['Opening Typing test.'],

    action: function(){
      openSites[openSites.length] = window.open('https://www.typingtest.com/');
    }
  },

  20:{
    vals: [
      [],
      'hello','hi '
    ],

    toBeSpeaked: ['Hello Mr. Adam.']
  },

  21: {
    vals: [
      [['play','dynamite'],['sing','dynamite']],
      
    ],

    toBeSpeaked: ["Playing Dynamite"],

    action: function(){
      dynamiteSong.play();
    },
  },

  22: {
    vals: [
      [['stop','dynamite'],['pause','dynamite']],
      
    ],

    toBeSpeaked: ["Pausing Dynamite"],

    action: function(){
      dynamiteSong.pause();
    },
  },

  23: {
    vals: [
      [['open','drive'],['show','drive']],
      
    ],

    toBeSpeaked: ["Opening Google Drive"],

    action: function(){
      openSites[openSites.length] = window.open('https://drive.google.com/');
    },
  },
  
  24: {
    vals: [
      [['close','tab'],['close','site']],
      
    ],
    
    toBeSpeaked: ["Closing tabs I opened"],
    
    action: function(){
      for(var p=0; p<openSites.length; p++){
        openSites[p].close();
      }
    },
  },
  
  25: {
    vals: [
      [['open','github'],['show','github']],
      
    ],

    toBeSpeaked: ["Opening GitHub"],

    action: function(){
      openSites[openSites.length] = window.open('https://github.com/');
    },
  },
  
  26: {
    vals: [
      [['open','color'],['open','colour']],
      
    ],

    toBeSpeaked: ["Opening Flat U.I. Colors "],

    action: function(){
      openSites[openSites.length] = window.open('https://flatuicolors.com/');
    },
  },
  
  27: {
    needTranscript: true,

    vals: [
      [],
      'define'
    ],

    toBeSpeaked: ["Showing word meaning"],

    action: function(transcript){
      openSites[openSites.length] = window.open("https://dictionary.cambridge.org/dictionary/english/" + transcript.replace('define ',''));
    }
  },
  
  28: {
    vals: [
      [],
      'good evening'
    ],

    toBeSpeaked: ["Good Evening Sir"],
  },
  
  29: {
    vals: [
      [],
      'good morning'
    ],

    toBeSpeaked: ["Good Morning Sir"],
  },
  
  30: {
    vals: [
      [],
      'good afternoon'
    ],

    toBeSpeaked: ["Good Afternoon Sir"],
  },
  
  31: {
    vals: [
      [],
      'how are you'
    ],

    toBeSpeaked: ["I am doing good, By the way, Thanks for asking Sir"],
  },
  
  32: {
    name:'date',

    vals: [
      [['what','is','date'],['what','is','day'],['tell','date'],['tell','day']],
      
    ],

    // below toBeSpeaked is changed every 1 second
    toBeSpeaked: [''],
  },
  
  33: {
    name:'time',
    
    vals: [
      [['what','is','time'],['tell','time']],
      
    ],

    // below toBeSpeaked is changed every 1 second
    toBeSpeaked: [''],
  },
  
  34: {
    vals: [
      [['daily','quote'],['tell','quote'],['daily','thought'],['tell','thought'],['daily','saying'],['tell','saying']],
      
    ],

    toBeSpeaked: [quotes[Math.floor((Math.random())*(quotes.length))+1]["text"]],

    action: function(){
      let MyThis = this;
      setTimeout(function(){
        for(let o=0; o<quotes.length; o++){
          if(quotes[o]['text'] == MyThis.toBeSpeaked[0]){
            if(quotes[o]['author'] != null){
              speakNow('By '+ quotes[o]['author']);
            }
            MyThis.toBeSpeaked[0] = quotes[Math.floor((Math.random())*(quotes.length))+1]["text"];
            break;
          }
        }
      },300);
    }
  },

  
  


};








// below function makes 1 to first, 2 to second, etc.
function stringifyNumber(n) {
  var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
  var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

  if (n < 20) return special[n];
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}

var monthName  = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var datee, time_12format;

setInterval(function(){
  datee = new Date();
  if(datee.getHours() == 0) time_12format = 12+" "+datee.getMinutes()+" AM";
  else if(datee.getHours() > 12) time_12format = (datee.getHours()-12)+" "+datee.getMinutes()+" PM";
  else time_12format = datee.getHours()+" "+datee.getMinutes()+" AM";

  records[whereNameIs('date')]['toBeSpeaked'][0] = 'Today is '+dayName[datee.getDay()]+', '+stringifyNumber(datee.getDate())+' of '+monthName[datee.getMonth()]+' '+datee.getFullYear()+' sir.';
  
  records[whereNameIs('time')]['toBeSpeaked'][0] = 'It is '+time_12format+' now sir.';
},1000);