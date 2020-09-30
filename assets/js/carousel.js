$(".custom-slider ol li").on("click", function() {
  $(this).addClass("active").siblings("li").removeClass("active");
  $(".custom-slider ul").animate({
      top: -$(".custom-slider").height() * $(this).index()
  }, 500);
});