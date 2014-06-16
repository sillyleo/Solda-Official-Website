$("document").ready(function() {
  /*   menu animation */
  $("span.dropdown i").click(function(){
    $(".menu-content, span.dropdown").toggleClass("show");
  });

  /* expand composer textarea when focus */
  $("textarea").focus(function(){;
    $("body").addClass("composing");
  });
  $(".message-content").click(function(){
    $("body").removeClass("composing");
  });

  /* scroll to bottom */
/*   $(".message-content").scrollTop($(".message-content")[0].scrollHeight); */
  
	/* mobile profile switching pages */


	$(window).resize(function(){	
	$(".user-description").hide();
	
/* 	這裡如果只用 resize, iphone 板會沒有用，我不會解 */
		
/* 		如果 css 進入 mobile 模式 就使用 mobile nav bar */
		
		if ($(".mobile-only").css("display") == "block" ){

/* 			一進 mobile 模式就切換到 selling */

			$("#about, .user-description, #reviews").hide();
			$("#selling").show();
			$(".mobile-only a").removeClass("current");
			$(".go-to-selling").addClass("current");
		
		}
		
/* 		離開 mobile 模式後恢復原狀 */
	
		else {
			$("#about, .user-description, #reviews, #selling").show();
		}
	});
	
			$(".go-to-selling").click(function(){
				$(".mobile-only a").removeClass("current");
				$(this).addClass("current");
				$("#about, .user-description, #reviews").hide();
				$("#selling").fadeIn();
			});
		
			$(".go-to-about").click(function(){
				$(".mobile-only a").removeClass("current");
				$(this).addClass("current");
				$("#selling, #reviews").hide();
				$("#about, .user-description").fadeIn();
			});
		
			$(".go-to-reviews").click(function(){
				$(".mobile-only a").removeClass("current");
				$(this).addClass("current");
				$("#selling,#about, .user-description").hide();
				$("#reviews").fadeIn();
			});		


/* 	試驗點了新訊息後點點消除的動畫 */

	$(".message-list li").click(function(){
		$(this).removeClass("new");
	});

/* 	點訊息後要標記為 current */

	$(".message-list li").click(function(){
		$(".message-list li").removeClass("current");
		$(this).toggleClass("current");
	});
	
	$(".rating-option a").click(function(){
		$(".comment textarea").show();
		$(".rating-option a").removeClass("selected");
		$(this).addClass("selected");
		$(".button").removeClass("inactive");
	}); 
	
/* 	cart button levels */

	$("a.purchase").click(function(){
		$("a.go-to-cart").addClass("pop");
		$(this).addClass( "active-status" ).delay( 2000 ).queue(function() {
	      $( this ).removeClass( "active-status" ).dequeue();
	    });
	});
	
/* 	demo invoice status */

	$(".demo2, .demo3").hide();
	$(".demo1").click(function(){
		$(this).hide();
		$(".demo2").show();
	});
	$(".demo2").click(function(){
		$(this).hide();
		$(".demo3").show();
	});
	

// 產品頁顯示 message-sheet，同時將下方內容變為黑白

	$(".show-message-sheet").click(function(){
		$("#message-sheet").addClass("show");
		$(".content-container").addClass("dimmer");
	});

	$("#message-sheet a").click(function(){
		$("#message-sheet").removeClass("show");
		$(".content-container").removeClass("dimmer");
	});

});