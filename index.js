$(function() {
  // accessing elements on the page
  var box = $('.redBox');
  var time = 4;
  var timer = $('.timer');
  var score = 0;
  var gameStarted = false;
  // $('.score').html(score);
  // set the timer to be 10
  // $(timer).html(time);
  // this will run every second forever
  var explosionTimer = setInterval(countDown, 3000);
  var startGame = setInterval(start, 5000);
  var showRandomBow = setInterval(createBox, 1000);
  var showRandomBox2 = setInterval(createBox2, 1000);

  function start() {
    time = 30;
    clearInterval(startGame);
  }

  //  declaring function
  function countDown() {
    if (time > 0) {
      $(timer).html(time - 1);
      time -= 1;
    } else {
      // call the function to change the box to green
      // $(".redBox").css("background-color", "green");
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
    gameStarted = true;
    countDown();
    $("body").append("<div class='redBox'></div>");
    // $(".redBox").css("background-color", "green");
    $(".redBox").css("position", "absolute")
    setInterval(function() {
      var position = $(".redBox").position();
      var redBoxRight = position.left + $(".redBox").width();
      //console.log(position);

      // stop the redBox
      var stopBox = $(".redBox").click(function() {
        // $(".redBox").stop();
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
        if (position.left < 296 && position.left > 2) {
          // $(".redBox").css("background-color", "blue");
          // $(".redBox").stop();
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
      if (position.top > 118 && position.top < 362) {
        // horizontal check for right box (bombBox)
        if (position.left < 1291 && position.left > 997) {
          //console.log(position);

          // $(".redBox").css("background-color", "pink");
          // $(".redBox").stop();
        }
      }

    }, 200)
    $(".redBox").animate({
      // generate random between 0-80
      left: "+=" + (
      (Math.random() * 60) - 30) + "vw",
      top: "+=" + Math.random() * 30 + "vh",
      width: "5px"
    }, 1500);
    $(".game").position({collision: "fit"});
    var timeOut2 = setTimeout(function() {
      $($(".redBox")[0]).attr('class', 'newClass');
    }, 5000)
    clearInterval(explosionTimer);

    var dropped_in_box = false;
    var counter = 0;
    // create drag and drop system
    $(function() {
      // cherry coming from the top
      $(".redBox").draggable({
        drag: function(event, ui) {
          var current_cherry = this;
          // left box
          $(".cherryBox").droppable({
            drop: function(event, ui) {
              // $(this).stop();
              dropped_in_box = true;
              score++;
              $('.score').html(score);

              $(this).addClass("dropped");
              //if it was dragged in it removes the current bomb
              if (dropped_in_box && counter != 1) {
                counter = 1;
                $(current_cherry).remove();
                dropped_in_box = false;
              }
            }
          });
          // Right box
          $(".bombBox").droppable({
            drop: function(event, ui) {

              dropped_in_box = false;

            }
          });
        }
      });
      console.log(dropped_in_box);
      // if (dropped_in_box) {
      //   $(".blueBox").remove();
      //   dropped_in_box = false;
      // }
      $('.score').html(score);
    });

  }

  function createBox2() {
    $("body").append("<div class='blueBox'></div>");
    // $(".blueBox").css("background-color", "purple");
    $(".blueBox").css("position", "absolute");
    var position = $(".blueBox").position();
    if (position) {
      setInterval(function() {
        var blueBoxRight = position.left + $(".blueBox").width();
        //console.log(position);

        // stop the blueBox
        var stopBox = $(".blueBox").click(function() {
          $(".blueBox").stop();
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
          if (position.left < 296 && position.left > 2) {
            $(".blueBox").css("background-color", "p");
            // $(".blueBox").stop();
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
        if (position.top > 118 && position.top < 362) {
          // horizontal check for right box (bombBox)
          if (position.left < 1291 && position.left > 997) {
            //console.log(position);

            // $(".blueBox").css("background-color", "yellow");
            // $(".blueBox").stop();
          }
        }

      }, 200)
    }
    $(".blueBox").animate({
      // generate random between 0-80
      left: "+=" + (
      (Math.random() * 60) - 30) + "vw",
      top: "+=" + Math.random() * 30 + "vh",
      width: "5px"
    }, 1500);
    $(".game").position({collision: "fit"});
    var timeOut2 = setTimeout(function() {
      $($(".blueBox")[0]).attr('class', 'newClass');
    }, 3000)
    clearInterval(explosionTimer);

    var dropped_in_box = false;
    var counter = 0;
    // create drag and drop system
    $(function() {
      $(".blueBox").draggable({
        drag: function(event, ui) {
          var current_bomb = this;
          //functions after a bomb is drop in a box
          $(".cherryBox").droppable({
            drop: function(event, ui) {
              // $(this).stop();
              dropped_in_box = false;
              score++;
              console.log(score);
              $(this).addClass("dropped");
            }
          });
          //when bomb is dragged inside bombBox executes code inside
          $(".bombBox").droppable({
            drop: function(event, ui) {

              dropped_in_box = true;
              score++;
              $('.score').html(score);

              $(this).addClass("dropped2");
              //debugger;
              console.log(dropped_in_box);
              //if it was dragged in it removes the current bomb
              if (dropped_in_box && counter != 1) {
                counter = 1;
                $(current_bomb).remove();
                dropped_in_box = false;
              }
            }
          });
        }
      });
    });

  }

  function findCoordinates() {
    return $($(".redBox")).position()
  }

})

// main() {
//   do {
//     createBoxes();
//     moveBoxes();
//     checkScore();
//     checkTimer();
//   } while (gameIsRunning);
//
//   endGame();
// }