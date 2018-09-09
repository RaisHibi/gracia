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

(function ($) {
  $(function () {
 
        calculate();
 
        jQuery('#calculator input').keyup(function() {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });
        jQuery('#calculator input, #calculator select').change(function() {
            calculate();
        });
        jQuery('#calculator input').keyup(function() {
            calculate();
        });
        function calculate() {
      $('.calculator').each(function(key, val){
        calcInputs = {};
            $(this).find('input, select').each(function(key, val){
                name = $(this).attr('name');
                val = $(this).val();
                if (!$.isNumeric(val)) {
                    switch (name) {
                        case 'area':
                            val = 1;
                            break;
                        case 'corners':
                            val = 4;
                            break;
                        case 'lamp':
                            val = '';
                            break;
                        case 'tube':
                            val = '';
                            break;
                        case 'chandelier-hook':
                            val = '';
                            break;
                        default:
                            break;
                    }
                    $(this).val(val);
                }
                calcInputs[name] = val;
            });
 
            total = 0;
 
            switch (calcInputs.texture) {
                case 'mat':
            total += calcInputs.area * 350;
            break;
                case 'glossy':
            total += calcInputs.area * 350;
            break;
                case 'satin':
            total += calcInputs.area * 350;
            break;
                case 'fabric':
            total += calcInputs.area * 400;
            break;
            default:
            break;
            }
 
            // каждый угол
                total += calcInputs.corners * 40;
 
            // установка люстры
            if (calcInputs['chandelier-hook'] >= 1) {
                total += calcInputs['chandelier-hook'] * 300;
            }
            // установка встраемого светильника
            if (calcInputs.lamp >= 1) {
                total += calcInputs.lamp * 300;
            }
            // обход трубы
            if (calcInputs.tube >= 1) {
                total += calcInputs.tube * 200;
            }
 
        install = calcInputs.area * 0;
        total += install;
	    if (total < 4000) {
	        total = 4000
	    }
 
            total += ' руб.';
            jQuery(this).find('span.total').html(total);
      });
        }
 
    });
})(jQuery);
;

