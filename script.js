//Global Variables
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;
var mistakeCounter = 0;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakeCounter = 0;
  
  // swap the Start and Stop buttons
  
randomPattern(pattern, 6);
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
playClueSequence();

console.log(pattern.toString());
}

function stopGame(){
   
   //initialize game variables
    gamePlaying = true;
  
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
  
}

var tonePlaying = false;
var volume = 0.8;  //must be between 0.0 and 1.0


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 700,
  6: 1000
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+ btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  
 
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 14;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won.");
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter] == btn){
    
    if (guessCounter == progress){
      
      if (progress == pattern.length - 1){
        
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }}
    
      else{
        
        guessCounter++;
    
  }
  }
  
  else{
    if (mistakeCounter == 2){
      alert("You made three mistakes. You lost.");
      loseGame();
      
    }
    else{
      mistakeCounter ++;
      alert("You have made " + mistakeCounter + " mistakes. Play Carefully");
      alert("You have " + (3 - mistakeCounter) + " mistakes more to Lose the game.");
    }
    
  }
}


function randomPattern(pattern, max){
  
  for ( let i = 0; i < max ; i++){
    
    pattern.push(random(1, max));
    
    
  }
  
  
}

function random(min, max){
  return Math.floor(Math.random()*(max - min)) + min;
}


