$(document).ready(function() {
  // $("form#animal").submit(function(event) {
    $("#nameInput").submit(function(event) {
      event.preventDefault();
      var username = $("input#username").val();
      $(".username").text(username);
      // $("#quizresult").show();
    });
    console.log ();

    $("form#quiz").submit(function(event) {
      var score = parseInt($("select#animal").val());
      // var movie = parseInt($("select#movie").val();

      if (score) {
        var score = (animal);
        if (score === 4 || score < 4) {
        }
        $("#quizresult1").show();
      }
    });
  });
