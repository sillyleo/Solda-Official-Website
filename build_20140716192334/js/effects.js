$("document").ready(function() {
  
  $("a.close, .overlay-player").click(function(){
  	$(".overlay-player").hide();
  })
	
  $("a.play").click(function(){
  	$(".overlay-player").show();
  })
	
});