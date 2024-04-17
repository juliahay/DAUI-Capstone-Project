pages = ["pages/molassesflood.html", "pages/juzoitami.html", "pages/lasvegasaces.html"]

$(document).ready(function() {
    document.getElementById("start").addEventListener("click", function() {
      page = Math.floor(Math.random() * pages.length);

      window.location = (pages[page]);
    });
  
  
});