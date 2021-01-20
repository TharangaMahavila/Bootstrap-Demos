/* Search Box Functions Start Here */

$(document).ready(function(){
    $("#search").focus(function() {
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});

/* Search Box Functions Ends Here */

$("#thumbnail").on('click',()=>{
  var audio = document.getElementById("song");
  if($(audio)[0].paused || $(audio)[0].currentTime<=0 && !$(audio)[0].ended){
    $(audio)[0].play();
  }else{
    $(audio)[0].pause();
  }
});