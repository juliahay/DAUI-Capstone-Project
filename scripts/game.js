let canPlay = false;
let prompt;
let answer;
let start;

$(document).ready(function() {
  $('#answerPrompt').hide();
  answer = $('#correctanswer').text();
  $('#correctanswer').hide();
  $('#submitanswer').hide();
  
  //remove Prompt popup on button click, save prompt, enable tab, add answer prompt button, start timer
  document.getElementById("startTimer").addEventListener("click", function() {
    canPlay = true;
    $('#prompt').hide();
    prompt = $('#fullprompt').text();
    $('#answerPrompt').show();
    $('#answerPrompt').focus();
    $('#answerPrompt').attr('aria-label', 'Answer Prompt');

    //timer
    start = Date.now();
  });

  
  document.addEventListener('keydown', function (e) {
    if (e.code == ' ' || e.code == 'Unidentified' || e.code == 'Space') {
      var t = $(document.activeElement).text()
      if (canPlay) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(t));
      }
      
      if (canPlay) {
        e.preventDefault();
      }
        
      
    } else if (e.code == 'Tab') {
      speechSynthesis.cancel();
    }
  });

    

  

  //add popup on "Answer Prompt" button, disable canPlay
  document.getElementById("answerPrompt").addEventListener("click", function() {
    $('#submitanswer').show();
    canPlay = false;
  });

  /*let currentTime = Math.floor((Date.now() - start) / 1000);
  console.log(currentTime)*/



  //check answer on Submit button click
  document.querySelector('form').addEventListener('submit', submit)

  function submit(e) {
    e.preventDefault();
    console.log("SUBMIT");
    let userAnswer = document.getElementById("useranswer").value;

    if(userAnswer.toLowerCase() == answer) {
      console.log("Correct");
      
    }
    
    

  }
  
  //remove Answer Prompt popup if wrong and press "Continue" button, enable canPlay


 
});

