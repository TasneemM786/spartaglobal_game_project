$(function(){

  // accessing elements on the page
  var box = $('.redBox');
  var time = 3;
  var timer = $('.timer');
  // set the timer to be 10
  $(timer).html(time);

  // this will run every second forever
  var explosionTimer = setInterval(countDown, 1000);
  var showRandomBow = setInterval(createBox, 1000);

  // function to move redBox


  //  declaring function
  function countDown() {
    if (time > 0) {
      $(timer).html(time - 1);
      time -= 1;
    } else {
      // call the function to change the box to green
      $(".redBox").css("background-color", "green");
      $(".redBox").css("position", "absolute")
      $(".redBox").animate({
        left: "+=80vw",
        top: "+=40vh",
        width: "5px",
      }, 1500 );
      // $(".redBox").stop();
      clearInterval(explosionTimer);

    }
  }

  // create function to create redBox
    // use jquery to create a div
    // display on the pay $(body).append("element")
    
})
