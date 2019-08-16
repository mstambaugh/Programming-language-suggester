$(document).ready(function(){
  // $("form#animal").submit(function(event) {
  $("form#quizresult").submit(function(event) {
    var username= $("input#username").val();
    $("#username").text(usernameInput);
    // $("#quizresult").show();
    event.preventDefault();
  });
});

console.log ();
