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
   $(".my_audio").trigger('load');
function play_audio(task) {
   if(task == 'play'){
    $(".my_audio").trigger('play');
                           }
  if(task == 'stop'){
    $(".my_audio").trigger('pause');
    $(".my_audio").prop("currentTime",0);
                           }
                      }
});//end of scroll



//$("#headline").css({"top" : fromTop * 0.9 + "px",
  //"transform": "rotate("+ fromTop+"deg)"
                 //  });
