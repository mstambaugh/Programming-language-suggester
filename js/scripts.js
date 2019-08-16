$(document).ready(function() {
  // $("form#animal").submit(function(event) {
  $("#nameInput").submit(function(event) {
    event.preventDefault();
    var username = $("input#username").val();
    $(".username").text(username);
    $("#quizresult").show();
  });
});

console.log ();
