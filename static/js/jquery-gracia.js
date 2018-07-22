function main() {
		$(".drop-together").hover(function(){
			var x = $(this).index();
			$("gr-men").slideDown(200);
			$(".navbar-default").eq(0).css({"border-radius": "0 0 0 0"});
		},
		function() {
			var isHovered = $("gr-men").is(":hover");
			if (isHovered == false) {
				$("gr-men").slideUp(200);
				window.setTimeout(function(){
					$(".navbar-default").eq(0).css({"border-radius": "0 0 10px 10px"});
				}, 200);
			}
			else {
				$(".drop-together").eq(0).css({"background-color":"#303030"});
			} 
		}	

		);
		$("gr-men").mouseleave(function() {
			var isHovered = $(".drop-together").eq(0).is(":hover");
			if (isHovered == false) {
				$("gr-men").slideUp(200);
				window.setTimeout(function(){
					$(".navbar-default").eq(0).css({"border-radius": "0 0 10px 10px"});
				}, 200);
				$(".drop-together").eq(0).css({"background-color":"#393939"});
			}
		});
		$(".panel-left li").eq(0).click(function(){
			if ($(this).hasClass("active") == false) {
				$(".panel-right ul-block").animate({opacity: "show"}).css({"display":"inline-block"});
				$(this).toggleClass("active");
				$(".panel-right p").animate({opactiy: 'hide'}, 0);
			}
		});
		/* $(".panel-left li").eq(-1).click(function(){
					if ($("pair-block").is(":visible")) {
						$("pair-block").animate({opacity: "hide", "margin-left": "-40%"}, 400);
						$(".panel-right > ul-block").delay(400).animate({"opacity":"show"}, 400);
					}
					else if ($(".panel-right ul-block").is(":visible")) {
						$(".panel-right ul-block").animate({opacity: "hide"}, 200);
						$(this).prevAll().removeClass("active");
						$(".panel-right p").delay(200).animate({opactiy: 'show'});
						$(".panel-left li").eq(-1).removeClass("active");
						$(".panel-right").css({"height":"100%"});
					}
		}); */
		$(".panel-right pair-block titles > li").eq(0).click(function(){
			if ($(this).hasClass("active") == false) {
					var x = $(this).index();
					$(".panel-right .pair").eq(x).nextAll(".pair").animate({"opacity":"hide", "margin-left":"10%"}, 100);
					$(".panel-right .pair").eq(x).delay(100).animate({"opacity":"show", "margin-left":"0"}, 200);
					$(this).toggleClass("active");
					$(this).nextAll("li").removeClass("active");
			}

		}); 
		$(".panel-right pair-block titles > li").eq(1).click(function(){
			if ($(this).hasClass("active") == false) {
					var x = $(this).index();
					$(".panel-right .pair").eq(x).prevAll(".pair").animate({"opacity":"hide", "margin-left":"-10%"}, 100);
					$(".panel-right .pair").eq(x).delay(100).animate({"opacity":"show", "margin-left":"0"}, 200);
					$(this).toggleClass("active");
					$(this).prevAll("li").removeClass("active");
			}
		}); 
		$("#panel li").click(function(){
		if ($(this).find("a").attr("href").length > 0) {
			$("gr-men").slideUp(50);
			window.setTimeout(function(){
				$(".navbar-default").eq(0).css({"border-radius": "0 0 10px 10px"});
			}, 200);
				$(".drop-together").eq(0).css({"background-color":"#393939"});
			window.location=$(this).find("a").attr("href"); return false;
		}	
		});

	}

$(document).ready(function() {
	if (window.matchMedia('(min-width: 768px)').matches) {
			main();
	} 
	$(window).resize(function() {
		if (window.matchMedia('(min-width: 768px)').matches) {
				main();	
		} 
	});
}); 


