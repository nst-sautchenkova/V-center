//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});


						
//modal
$('.modal-block').on('click', function(){
	var	modid =  $(this).data("id");
  $(".modal[data-id='#"+modid+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open-hidden");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('modal');
	$(".modal-content.modal").css({'transform':'translateY(-100%)'});
	$(".modal-ov").hide("slow");
	$("#profit-calculator .sel-tree").removeClass('none');
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('modal');
		$(".modal-content").css({'transform':'translateY(0)'});
	}
	setTimeout(func, 300);
	
});

$(".modal-ov").click(function () {
	$(".modal-content").addClass('modal');
	$(".modal-content.modal").css({'transform':'translateY(-100%)'});
	$(".modal-ov").hide("slow");
	$("#profit-calculator .sel-tree").removeClass('none');
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('modal');
		$(".modal-content").css({'transform':'translateY(0)'});
	}
	setTimeout(func, 300);
	
});


$(document).on("ready", function () {
	$("#form-language .btn-link").click(function () {
		$("#form-language .btn-link").removeClass('active');
		$(this).addClass('active');
	});
});


$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
                 
    $('.scrollToTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 500);
        return false;
    });
});


/*MENU*/
$(document).on("ready", function () {
    $("#menu-show").click(function () {
        $("#menu-panel").addClass("menu-open");
    });
	
});
$(document).on("ready", function () {
	$("#menu-hide").click(function () {
		$("#menu-panel").removeClass("menu-open");
	});
});