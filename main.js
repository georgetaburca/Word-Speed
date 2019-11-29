window.addEventListener('load', init);


//Global variables

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change levels
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const words = [
    'muffin',
    'cat',
    'hill',
    'possible',
    'multiplication',
    'stuborn',
    'mouth',
    'meadow',
    'secluded',
    'fragile',
    'agile',
    'modification',
    'pharmacy',
    'jacket',
    'wig',
    'piglet',
    'furnance',
    'lamp',
    'subtraction',
    'oblivious',
    'culture',
    'bathroom',
    'subtitled',
    'ligature',
    'investigator',
    'poor',
    'love',
    'salvation',
    'train',
    'pasta',
    'mistery',
    'fork',
    'dishwasher',
    'garden',
    'angel',
    'nutrition',
    'alphabet',
    'bombon',
    'cataract',
    'doubt',
    'elephant',
    'horns',
    'inocent',
    'jaguar',
    'kilogram',
    'ornitolog',
    'peace',
    'rhinocer',
    'umbrella',
    'vocation',
    'zebra'
];

//Initialize game
function init (){
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Start match
function startMatch(){
    if(matchWords()){
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
   }
   //Fix score when goes negative
   if(score === -1){
    scoreDisplay.innerHTML = 0;
   } else {
     scoreDisplay.innerHTML = score;
   }

   
}
//Match current word with word input
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
      } else {
        message.innerHTML = '';
        return false;
      }
}
//Pick and show random word
function showWord(words){
//Generate random array index    
    const randIndex = Math.floor(Math.random() * words.length);
//Output random word
    currentWord.innerHTML = words[randIndex];

}
//Countdown timer
function countdown(){
    //Make sure time is not run out
    if(time > 0){
    //Decrease time
    time--;
    }else if(time === 0){
    //Game is over
    isPlaying = false;    

    }
//Show time
timeDisplay.innerHTML = time;

} 
//Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = 0;

    }
}
