$(function(){

  // accessing elements on the page
  var time = 10;
  var timer = $('.timer');
  // set the timer to be 10
  $(timer).html(time);

  // this will run every second forever
  var explosionTimer = setInterval(countDown, 1000);

  //  declaring function
  function countDown() {
    if (time > 0) {
      $(timer).html(time - 1);
      time -= 1;
    }else {
      // call the function to change the box to green
    }
  }

})
