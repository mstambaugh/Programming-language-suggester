$(document).ready(function() {
  // $("form#animal").submit(function(event) {
    event.preventDefault();
    $("#nameInput").submit(function(event) {
      var username = $("input#username").val();
      $(".username").text(username);
    })

    $("form#quiz").submit(function(event) {
      var score = parseInt($("#animal").val());

        console.log ();
      if (score === 4)
        $("#quizresult1").show(text);
        // var movie = parseInt($("select#movie").val();
      } else } {
        $("#quizresult2").show(text);
    });
  });
