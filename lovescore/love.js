
$(document).ready(function() {
  $("#testButton").click(function() {
      const name = $("#name-input").val().trim();
      const crushName = $("#crush-input").val().trim();

      if (name === "" || crushName === "") {
          $(".bored").text("Please fill in both your name and your crush's name.");
          return;
      }

      // Generate a random love score
      const randomLike = Math.floor(Math.random() * 101);
      let message;

      if (randomLike >= 78) {
          message = "You love each other like rice and beans. Your Love Score is " + randomLike + "%";
      } else if (randomLike >= 55) {
          message = "This relationship might work out. Your Love Score is " + randomLike + "%";
      } else if (randomLike > 30) {
          message = "This relationship might need some work. Your Love Score is " + randomLike + "%";
      } else {
          message = "Sorry, but your relationship will not work out. Your Love Score is " + randomLike + "%";
      }

      // Update and switch to the result page
      $("#resultMessage").text(message);
      $("#homePage").hide();
      $("#resultPage").show();
  });

  $("#backButton").click(function(e) {
      e.preventDefault();
      // Show the home page and hide the result page
      $("#resultPage").hide();
      $("#homePage").show();
      $("#name-input").val("");
      $("#crush-input").val("");
      $(".bored").text("");
  });
});
