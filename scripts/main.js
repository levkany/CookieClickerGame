/*
    The main Javascript for all the global properties and functions
*/

'use strict'

// Global Variables for the whole app
var localStorage_saveIndication_key = 'isNew';
var localStorage_coins_key = 'coins';
var localStorage_gems_key = 'gems';
var localStorage_exp_key = 'exp';

var isFullScreen = false;

var imagePath_coin = 'resources/content/coin.svg';
var soundPath_coin1 = 'resources/content/sounds/gui.mp3'

var images_size_coin_w = '30vw';
var images_size_coin_h = '30vh';

//  The time it takes for the elements to be animated
var animationTime = 300;

//  The player class will contains all the methods and properties related to the player
function Player() {

  this.isNew = false;
  this.coins = 0;
  this.gems = 0;
  this.exp = 0;

  //#region Methods

  // create a new key in the local storage to indicate a new save
  this.createSave = function() {
    try {
      localStorage.setItem(localStorage_saveIndication_key, 'true');
      console.debug('updated player save status in localStorage');
      return 1;
    }
    catch{
      console.debug('updated player save status in localStorage [FAILED]');
      return 0;
    }
  }

  // get the value from localStorage indicating the status of the player save
  this.getSave = function() {
    try {
      return localStorage.getItem(localStorage_saveIndication_key);
    }
    catch{
      return 'null';
    }
  }

  //  set the player coins count in the localStorage
  this.setCoins = function(coins) {
    try {
      localStorage.setItem(localStorage_coins_key, coins);
      console.debug('updated player coins in localStorage');
      return 1;
    }
    catch{
      console.debug('updated player coins in localStorage [FAILED]');
      return 0;
    }
  }

  //  get the player coins count from the localStorage
  this.getCoins = function() {
    try {
      this.coins = parseInt(localStorage.getItem(localStorage_coins_key));
      console.debug('extracted coins count from localStorage');
      return this.coins;
    }
    catch{
      console.debug('extracted coins count from localStorage [FAILED]');
      return 'null';
    }
  }

  //  set the player gems count in the localStorage
  this.setGems = function(gems) {
    try {
      localStorage.setItem(localStorage_gems_key, gems);
      console.debug('updated player gems in localStorage');
      return 1;
    }
    catch{
      console.debug('updated player gems in localStorage [FAILED]');
      return 0;
    }
  }

  //  get the player gems count from the localStorage
  this.getGems = function() {
    try {
      this.gems = parseInt(localStorage.getItem(localStorage_gems_key));
      console.debug('extracted gems count from localStorage');
      return this.gems;
    }
    catch{
      console.debug('extracted gems count from localStorage [FAILED]');
      return 'null';
    }
  }

  //  set the player exp count in the localStorage
  this.setExp = function(exp) {
    try {
      localStorage.setItem(localStorage_exp_key, exp);
      console.debug('updated player exp in localStorage');
      return 1;
    }
    catch{
      console.debug('updated player exp in localStorage [FAILED]');
      return 0;
    }
  }

  //  get the player exp count from the localStorage
  this.getExp = function() {
    try {
      this.exp = parseInt(localStorage.getItem(localStorage_exp_key));
      console.debug('extracted exp count from localStorage');
      return this.exp;
    }
    catch{
      console.debug('extracted exp count from localStorage [FAILED]');
      return 'null';
    }
  }

  // update dom with coins value
  this.updateDom = function(type, element) {
    try {
      let $tmp_type = type;
      let $tmp_element = element;

      //  Check which of the player propertie has been selected as an argument and update the dom based on that.
      switch ($tmp_type) {
        case 'coins':
          $tmp_element.innerHTML = this.coins;
          console.debug('updated dom with coins count: ' + this.coins);
          break;

        case 'gems':
          $tmp_element.innerHTML = this.gems;
          console.debug('updated dom with coins count: ' + this.gems);
          break;

        case 'exp':
          $tmp_element.innerHTML = this.exp;
          console.debug('updated dom with coins count: ' + this.exp);
          break;

        default:
          break;
      }
      return 1;
    }
    catch{
      console.debug('updated dom with coins count: [FAILED]');
      return 0;
    }
  }


  //#endregion
}

//  The draw coin class is basicly a coin class which contains all the methods and properties for the coin
function Coin(x, y) {
  this.x = x - 10;
  this.y = y - 50;

  //  Not optimized at all, drawing divs

  //  Draw the coin with animation for 1 second and after the animation,
  //  we need the coin to self destruct from the dom to release memory and load.
  //  The location of the drawn coin is based on position absolute

  this.draw = function() {
    let coinObj = document.createElement('img');
    $(coinObj).attr({
      'src': imagePath_coin,
      'width': images_size_coin_w,
      'height': images_size_coin_h,
      'style': 'position:absolute; top:' + this.y + 'px;left:' + this.x + 'px'
    });
    $('#clickArea').append(coinObj);


    //  Animate the coin element with decreasing opacity and decreasing vertical position
    coinObj.animate([
      { opacity: 1, top: this.y + 'px' },
      { opacity: 0, top: (this.y - 50) + 'px' }
    ], animationTime);


    //  Im so proud of this solution god damn... was worth the long hours.
    //  remove the coin element from the game window right before the animation has ended.
    function animationEnded() {
      $(coinObj).remove();
      console.log('animation ended for coin instance ~ ' + Math.random() * 100);
    }
    setTimeout(animationEnded, animationTime - 50);
  }
}

function SoundManager() {

  //  Loads a sound file into an audio element and returns it
  this.loadSound = function(src) {
    var $audio = new Audio();
    $audio.src = src;
    $audio.load();
    return $audio;
  }

  //  Play the sound file attached to the audio element
  this.playSound = function(audioElement, audioElement2, audioElement3, audioElement4, audioElement5, audioElement6) {

    //  the audio is playing, reset the audio
    if ((audioElement.readyState > 2) && (!audioElement.ended) && (audioElement.duration > 0) && (audioElement.currentTime > 0)) {
      if ((audioElement2.readyState > 2) && (!audioElement2.ended) && (audioElement2.duration > 0) && (audioElement2.currentTime > 0)) {
        if ((audioElement3.readyState > 2) && (!audioElement3.ended) && (audioElement3.duration > 0) && (audioElement3.currentTime > 0)) {
          if ((audioElement4.readyState > 2) && (!audioElement4.ended) && (audioElement4.duration > 0) && (audioElement4.currentTime > 0)) {
            if ((audioElement5.readyState > 2) && (!audioElement5.ended) && (audioElement5.duration > 0) && (audioElement5.currentTime > 0)) {
              audioElement6.play();
            }
            else {
              audioElement5.play();
            }
          }
          else {
            audioElement5.play();
          }
        }
        else {
          audioElement4.play();
        }
      }
      else {
        audioElement3.play();
      }
    }
    else {
      audioElement2.play();
    }
  }
}

//  Disable selection in the page
document.body.onselectstart = function() {
  return false;
}

$(document).ready(function() {

  //#region   Initialize the fullscreen events
  //  Execute the fullscreen algoritem when the user click anywhere only once untill boolean reset
  document.getElementById('wrapper').addEventListener('click', function() {
    execute();
  });

  //  When the browser exists full screen,update the fullscreen variable status
  document.onfullscreenchange = function(e) {
    if (isFullScreen) {
      isFullScreen = false;
    }
  }
  //  the core function to set the full screen to the document
  var execute = function() {
    if (isFullScreen == false) {
      try {
        document.getElementById('wrapper').requestFullscreen();
        isFullScreen = true;
      }
      catch{
        try {
          document.getElementById('wrapper').mozRequestFullScreen();
          isFullScreen = true;
        }
        catch{
          try {
            document.getElementById('wrapper').webkitRequestFullScreen();
            isFullScreen = true;
          }
          catch{
            try {
              document.getElementById('wrapper').msRequestFullscreen();
              isFullScreen = true;
            }
            catch{ isFullScreen = false; }
          }
        }
      }
    }
  }

  //#endregion

  //  The player instance
  var playa = new Player();

  //  The sound manager instance
  var soundManager = new SoundManager();
  var sound1 = soundManager.loadSound(soundPath_coin1);
  var sound2 = soundManager.loadSound(soundPath_coin1);
  var sound3 = soundManager.loadSound(soundPath_coin1);
  var sound4 = soundManager.loadSound(soundPath_coin1);
  var sound5 = soundManager.loadSound(soundPath_coin1);
  var sound6 = soundManager.loadSound(soundPath_coin1);

  //  What will happend when the user clicks the clickArea
  document.getElementById('clickArea').addEventListener('touchstart', function(e) {
    if (e.type == 'touchstart') {
      //  Draw a coin for up to two fingers that may trigger the event
      if (e.touches.length <= 2) {
        for (let x = 0; x < e.touches.length; x++) {
          let coin = new Coin(e.touches[x].clientX, e.touches[x].clientY);
          coin.draw();
          soundManager.playSound(sound1, sound2, sound3, sound4, sound5, sound6);

          playa.setCoins(playa.getCoins() + 5);
          playa.updateDom('coins', document.getElementById('coins'));
        }
      }

      //  More then two fingers is not allowed
      else {
        e.preventDefault();
      }
    }
  });

  function gameLoop() {
    // Some juciy cossy action

    playa.setCoins(Math.random() * 1000);
    playa.getCoins();
    playa.updateDom('coins', document.getElementById('coins'));
  }

  //  Make the gameloop function repeat the execution of the code every x seconds
  //   setInterval(gameLoop, 1000);

});


//  TODO:
//  Work on the character creation system
//  Basic features:
/*
    Name,
    Skin Model
*/
