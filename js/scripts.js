$(document).ready(function() {
  // $("form#animal").submit(function(event) {
    event.preventDefault();
    $("#nameInput").submit(function(event) {
      var username = $("input#username").val();
      $(".username").text(username);

    $("form#quiz").submit(function(event) {
        console.log ();
      var quiz = parseInt($("value#animal").val());
        if ('animal' === 4)
        // var movie = parseInt($("select#movie").val();

        $("#quizresult1").show();
      }) else {}
        $("#quizresult2").show();
    });
  });
