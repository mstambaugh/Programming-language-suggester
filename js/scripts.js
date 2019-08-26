$(document).ready(function() {

  $("#resultbtn").click(function(event) {
    event.preventDefault();
    var score = parseInt($("#animal").val()) + parseInt($("#drink").val()) + parseInt($("#movie").val()) + parseInt($("#show").val()) + parseInt($("#song").val());

  $("#quizresult1").hide
    var username = $("input#username").val();
    $(".username").text(username);
    if (score <= 5) {
      $("#quizresult1").show();
      $("#quizresult2").hide();
      $("#quizresult3").hide();
      $("#quizresult4").hide();
    }

    else if (score <=10 && score > 5) {
      $("#quizresult2").show();
      $("#quizresult3").hide();
      $("#quizresult4").hide();
      $("#quizresult1").hide();
    }

    else if (score <=15 && score > 10) {
      $("#quizresult3").show();
      $("#quizresult4").hide();
      $("#quizresult2").hide();
      $("#quizresult1").hide();
    }

    else {
      $("#quizresult4").show();
      $("#quizresult1").hide();
      $("#quizresult2").hide();
      $("#quizresult3").hide();
    }
  });
});
