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
  //  declaring function
  function countDown() {
    if (time > 0) {
      $(timer).html(time - 1);
      time -= 1;
    } else {
      // call the function to change the box to green
      $(".redBox").css("background-color", "green");
      $(".redBox").css("position", "absolute")
      // $(".redBox").animate({
      //   left: "+=45vw",
      //   top: "+=30vh",
      //   width: "5px",
      // }, 1500 );
      // $(".redBox").stop();
      clearInterval(explosionTimer);
    }
  }
  // create function to create redBox
    // use jquery to create a div
    // display on the pay $(body).append("element")
//
    function createBox() {
      $("body").append("<div class='redBox'></div>");
      $(".redBox").css("background-color", "green");
      $(".redBox").css("position", "absolute")
      setInterval(function(){
        var position = $(".redBox").position();
        var redBoxRight = position.left + $(".redBox").width();
        console.log(position);

        // stop the redBox
        var stopBox = $(".redBox").click(function(){
          $(".redBox").stop();
        })


        // work out cooridinates of cherryBox
        var cherryBox = $(".cherryBox");
        var cherryBoxPostion = cherryBox.position();
        var cherryBoxLeft = cherryBoxPostion.left;
        var cherryBoxRight = cherryBoxLeft + cherryBox.width();
        var cherryBoxBLeft = cherryBoxPostion.top + cherryBox.height();
        var cherryBoxBRight = cherryBoxRight + cherryBox.height();

        // veritical check for left box (cherry box)
        if (position.top > 118 && position.top < 362) {
          // horizontal check for left box
          if (position.left < 296 && position.left > 2 ) {
            $(".redBox").css("background-color", "blue");
            $(".redBox").stop();
          }
        }

        // check for right box (bomb box)
        // cooridinates of bombBox
        var bombBox = $(".bombBox");
        var bombBoxPosition = bombBox.position();
        var bombBoxLeft = bombBoxPosition.left;
        var bombBoxRight = bombBoxLeft + bombBox.width();
        var bombBoxBLeft = bombBoxPosition.top + bombBox.height();
        var bombBoxBRight = bombBoxRight + bombBox.height();

        // vertical checks for right box (bombBox)
        if (position.top  > 118 && position.top < 362) {
          // horizontal check for right box (bombBox)
          if (position.left < 1291 && position.left > 997) {
            console.log(position);

            $(".redBox").css("background-color", "pink");
            $(".redBox").stop();
          }
        }

        debugger;
      }, 200)
      $(".redBox").animate({
        // generate random between 0-80
        left: "+="+((Math.random()*60)-30)+"vw",
        top: "+="+Math.random()*30+"vh",
        width: "5px",
      }, 1500 );
      // $(".game").position({collision:"fit"});
      var timeOut2 = setTimeout(function(){
        //debugger;
        $($(".redBox")[0]).attr('class', 'newClass');
      }, 3000)
      clearInterval(explosionTimer);
    }

    function findCoordinates() {
      return $($(".redBox")).position()
    }
})
