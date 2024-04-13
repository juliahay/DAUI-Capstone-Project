$(document).ready(function() {
  document.addEventListener('keydown', function (e) {
    if (e.code == ' ' || e.code == 'Unidentified' || e.code == 'Space') {
      var t = $(document.activeElement).text()
      speechSynthesis.speak(new SpeechSynthesisUtterance(t));

      if (e.target == document.body) {
        e.preventDefault();
    }
  } else if (e.code == 'Tab') {
    speechSynthesis.cancel();
  }
  });

 
});

