pages = ["pages/molassesflood.html"]

$(document).ready(function() {
    document.getElementById("start").addEventListener("click", function() {
      page = Math.floor(Math.random() * pages.length);

      window.location = (pages[page]);
    });
  
  
});