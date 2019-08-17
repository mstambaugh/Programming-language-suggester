$(document).ready(function() {

  $("#resultbtn").click(function(event) {
    event.preventDefault();
    var score = parseInt($("#animal").val()) + parseInt($("#drink").val()) + parseInt($("#movie").val()) + parseInt($("#show").val()) + parseInt($("#song").val());

    var username = $("input#username").val();
    $(".username").text(username);
    if (score <= 5) {
      $("#quizresult1").show();
    }

    else if (score <=10 && score > 5) {
      $("#quizresult2").show();
    }

    else if (score <=15 && score > 10) {
      $("#quizresult3").show();
    }

    else {
      $("#quizresult4").show();
    }
  });
});
