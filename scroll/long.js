/*$ this means it will use jquery
universal selector*/
$(window).scroll(function(){ /*() tells you to keep scrolling*/
var fromTop = $(window).scrollTop();
var audio = new Audio('../audio/wind.mp3');
audio.play();
console.log("I like to move it, move it");

console.log(fromTop);

$("#headline").text("You scrolled " + fromTop
                    +"px");
 if(fromTop> 4000){

    .text("You scrolled too far");
    $("#headline").css({"transform": "rotate(0 deg)",
      "display":"none"
                       });
 } else {


  $("#headline").css({"top" : fromTop * 1.4 + "px",
  "transform"
   });
   var windw = this;

   // jQuery
      // Stop the fixed heading from scrolling over the footer
      $.fn.followTo = function (pos) {
        var $this = this,
        $window = $(window);

        $window.scroll(function (e) {
          if ($window.scrollTop() > pos) {
            $this.css( { position: 'absolute', bottom: '-180px' } );
          } else {
            $this.css( { position: 'fixed', bottom: '0' } );
          }
        });
      };
      // This behaviour is only needed for wide view ports
      if ( $('#dragon').css("position") === "absolute" ) {
        $('#dragon').followTo(180);
      }



//$("#headline").css({"top" : fromTop * 0.9 + "px",
  //"transform": "rotate("+ fromTop+"deg)"
                 //  });
