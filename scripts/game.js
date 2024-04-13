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
    $('#answerPrompt').hide();
    canPlay = false;
  });


  //check answer on Submit button click
  document.querySelector('form').addEventListener('submit', submit)

  function submit(e) {
    e.preventDefault();
    console.log("SUBMIT");
    let userAnswer = document.getElementById("useranswer").value;

    if(userAnswer.toLowerCase() == answer) {
      correctGuess();

    } else {
      incorrectGuess();
    }
    
  }
  
  
  function correctGuess() {
    $('#submitanswer').hide();
    let time = (Date.now() - start) / 1000;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    let popup = document.createElement("div");
    popup.id = "result";
    let title = document.createElement("h1");
    title.innerHTML = "CORRECT!"
    let timeText = document.createElement("h3");
    timeText.innerHTML = "That took you " + minutes + " minutes and " + seconds + " seconds to complete."
    let info = document.createElement("p");
    info.innerHTML = "Was that hard? Annoying? Took a long time? Think about how many people navigate websites like this all the time. Imagine how much harder this would be if a site wasn't made with accessibility in mind. Consider that whenever you work on a project in the future."
    let button = document.createElement("button");
    button.id = "playagain"
    button.innerHTML = "Play Again?"
    popup.appendChild(title);
    popup.appendChild(timeText);
    popup.appendChild(info);
    popup.appendChild(button);
    document.body.appendChild(popup);
    document.getElementById("playagain").addEventListener("click", function() {
      document.getElementById("result").remove();
      window.location = "../index.html"
    });
  }
  
  function incorrectGuess() {
    //remove Answer Prompt popup if wrong and press "Continue" button, enable canPlay
    $('#submitanswer').hide();
    let popup = document.createElement("div");
    popup.id = "result";
    let title = document.createElement("h1");
    title.innerHTML = "INCORRECT!"
    let info = document.createElement("h3");
    info.innerHTML = "Want to keep trying?"
    let button = document.createElement("button");
    button.id = "continuePlaying"
    button.innerHTML = "Continue"
    popup.appendChild(title);
    popup.appendChild(info);
    popup.appendChild(button);
    document.body.appendChild(popup);
    document.getElementById("continuePlaying").addEventListener("click", function() {
      $('#answerPrompt').show();
      canPlay = true;
      document.getElementById("result").remove();
    });
  
  }
 
});



