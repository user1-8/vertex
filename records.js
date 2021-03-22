'use strict'

var bDaySong = new Audio('https://drive.google.com/uc?id=1IGmG2bb_B-_5hJpUFWDy-pgA0gtFK0tA');

var dynamiteSong = new Audio('https://drive.google.com/uc?id=1pimXm8lSPc41yX9GVC_dgVmA3KYwoKJd');

var intervalWaterDrink;

var openSites = [];

var records = {

  1: {
    vals: [
      [['Who','you'],['who','vertex'],['introduce','yourself']],
      'Are you vertex','tell about yourself'
    ],

    toBeSpeaked: "I am Vertex, an kind of AI system made by Mr. Adam, and a small real life alternative of Iron man's jarvis. I assist Mr. Adam in his daily work, In other words, you can call me his P.A. or Personal Assistant."
  },

  2: {
    vals: [
      [['what','can','you','do'],['what','can','you','perform'],['tell','your','abilites']]
      
    ],

    toBeSpeaked: "I can do anything you like, just ask."
  },

  3: {
    vals: [
      [['play','Birthday'],['sing','birthday']],
      
    ],

    toBeSpeaked: "Playing the birthday song",

    action: function(){
      bDaySong.play();
    },
  },

  4: {
    vals: [
      [['stop','Birthday'],['pause','birthday']],
      
    ],

    toBeSpeaked: "Pausing the birthday song",

    action: function(){
      bDaySong.pause();
    },
  },
  
  5:{
    vals: [
      [['stop','water','reminder'],['deactivate','water','reminder'],['stop','water','program'],['deactivate','water','program']],
      
    ],

    toBeSpeaked: "Deactivating the water drink program.",

    action: function(){
      clearInterval(intervalWaterDrink);
    }
  },

  6: {
    vals: [
      [['activate','water','reminder'],['activate','water','program'],['start','water','program'],['start','water','reminder'],['setup','water','reminder'],['setup','water','program'],['set','up','water','reminder'],['set','up','water','program']],
      
    ],

    toBeSpeaked: "Setting up the drink water reminder with and interval of 15 minutes. Do not refresh or close this tab or you'll deactivate the Drink Water program.",

    action: function(){
      intervalWaterDrink = setInterval(function(){
        speakNow("Hey Mr. Adam, time to drink water now. Go and drink.");
      },15*60000);
    }
  },

  7: {
    vals: [
      [['bye'],['quit'],['exit']],
      'meet you later','see you later'
    ],

    toBeSpeaked: "See you later Mr. Adam. Good Bye.",

    action: function(){
      window.close();
    }
  },

  8:{
    vals: [
      [['say','again'],['speak','again'],['repeat','again']],
      'pardon','please repeat'
    ],

    toBeSpeaked: '<pardon>',
  },

  9:{
    vals: [
      [['who','made','you'],['whom','made','you'],['who','created','you'],['whom','created','you']],
      
    ],

    toBeSpeaked: 'It is my master Mr. Adam Satish who worked 8 hours per day to give me life.'
  },

  10:{
    vals: [
      [['tell','me','joke']],
      'make me laugh',
    ],

    // randNum: Math.random(),

    toBeSpeaked: jokes[Math.floor((Math.random())*387)+1]["setup"],

    action: function(){
      var MyThis = this;
      for(var q=0; q<jokes.length; q++){
        if(jokes[q]["setup"] == MyThis.toBeSpeaked){
          speakNow(jokes[q]["punchline"]);
          MyThis.toBeSpeaked = jokes[Math.floor((Math.random())*387)+1]["setup"];
          break;
        }
        }
    }

  },

  11:{
    vals: [
      [['who','adam']],
      'Do you know Adam','adam'
    ],

    toBeSpeaked: 'Mr. Adam is my God, Mr. Adam is my father, Mr. Adam is my GodFather'
  },

  12:{
    vals: [
      [['show','keep'],['open','keep']],
      
    ],

    toBeSpeaked: 'Showing your google keep',

    action: function(){
      openSites[openSites.length] = window.open('http://keep.google.com/');
    }
  },

  13:{
    vals: [
      [['show','whatsapp'],['open','whatsapp']],
      
    ],

    toBeSpeaked: 'Opening Whatsapp',

    action: function(){
      openSites[openSites.length] = window.open('https://web.whatsapp.com/');
    }
  },

  14:{
    vals: [
      [['show','youtube','studio'],['open','youtube','studio']],
      
    ],

    toBeSpeaked: 'Opening YouTube Studio',

    action: function(){
      openSites[openSites.length] = window.open('https://studio.youtube.com/');
    }
  },

  15:{
    vals: [
      [['show','youtube'],['open','youtube']],
      
    ],

    toBeSpeaked: 'Opening YouTube',

    action: function(){
      openSites[openSites.length] = window.open('https://www.youtube.com/');
    }
  },

  16:{
    vals: [
      [['open','type racer'],['open','typing racer']],
      
    ],

    toBeSpeaked: 'Opening Type Racer',

    action: function(){
      openSites[openSites.length] = window.open('https://play.typeracer.com/');
    }
  },

  17:{
    vals: [
      [['take','typing test'],['open','typing test'],['open','typing master']],
      
    ],

    toBeSpeaked: 'Opening Typing test.',

    action: function(){
      openSites[openSites.length] = window.open('https://www.typingtest.com/');
    }
  },

  18:{
    vals: [
      [],
      'hello','hi '
    ],

    toBeSpeaked: 'Hello Mr. Adam.'
  },

  19: {
    vals: [
      [['play','dynamite'],['sing','dynamite']],
      
    ],

    toBeSpeaked: "Playing Dynamite",

    action: function(){
      dynamiteSong.play();
    },
  },

  20: {
    vals: [
      [['stop','dynamite'],['pause','dynamite']],
      
    ],

    toBeSpeaked: "Pausing Dynamite",

    action: function(){
      dynamiteSong.pause();
    },
  },

  21: {
    vals: [
      [['open','drive'],['show','drive']],
      
    ],

    toBeSpeaked: "Opening Google Drive",

    action: function(){
      openSites[openSites.length] = window.open('https://drive.google.com/');
    },
  },
  
  22: {
    vals: [
      [['open','github'],['show','github']],
      
    ],

    toBeSpeaked: "Opening GitHub",

    action: function(){
      openSites[openSites.length] = window.open('https://github.com/');
    },
  },
  
  23: {
    vals: [
      [['close','tab'],['close','site']],
      
    ],

    toBeSpeaked: "Closing tabs I opened",

    action: function(){
      for(var p=0; p<openSites.length; p++){
        openSites[p].close();
      }
    },
  },
  


};