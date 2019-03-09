var count = 0;



$(document).ready(function(){

var orientation = $('body').css('display');
console.log(orientation);
	function removeOpenClass(){
		$('.all_tabs').each(function(i,el){
			if ($(el).hasClass('open')) {
				$(el).removeClass('open');
			}
		});
	}


	function hasOpenClass() {
		var tabs = document.querySelectorAll('.all_tabs');
		var tabsArr = Array.prototype.slice.call(tabs);
		 for(i = 0 ; i < tabsArr.length ; i++) {
		 	if (tabsArr[i].classList.contains('open')) {
		 		return i+1;
		 	}

		 }
		 return 0;
		
	}

	$('.js-close').on('click', function(e){
		e.preventDefault();
		removeOpenClass();
	});

	$('.js-open-main_tab_1').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_1').css("display","block");
		setTimeout(function(){ $('.main_tab_1').addClass('open'); }, 500);		
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_2').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_2').css("display","block");
		setTimeout(function(){ $('.main_tab_2').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_3').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_3').css("display","block");		
		setTimeout(function(){ $('.main_tab_3').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_4').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_4').css("display","block");
		setTimeout(function(){ $('.main_tab_4').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});


	$(window).on('scroll',function(){
		if(hasOpenClass() === 0){
		    if(($(window).scrollTop()) > (($('.main').height())-($(window).innerHeight()))){
		    	$('.all_tabs').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 1){
			if(($(window).scrollTop()) > (($('.main_tab_1').height())-($(window).innerHeight()))){
				$('.main_tab_1').css("display","block");
		    	$('.main_tab_2, .main_tab_3, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 2){
			if(($(window).scrollTop()) > (($('.main_tab_2').height())-($(window).innerHeight()))){
				$('.main_tab_2').css("display","block");
		    	$('.main_tab_1, .main_tab_3, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 3){
			if(($(window).scrollTop()) > (($('.main_tab_3').height())-($(window).innerHeight()))){
				$('.main_tab_3').css("display","block");
		    	$('.main_tab_1, .main_tab_2, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 4){
			if(($(window).scrollTop()) > (($('.main_tab_4').height())-($(window).innerHeight()))){
				$('.main_tab_4').css("display","block");
		    	$('.main_tab_1, .main_tab_2, .main_tab_3').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
  });


});



function appearModal(){
	var url = window.location.href;
	if(url.includes('getReceiver')){
		document.getElementById('modalButton').click();
	}
}

function close_btn(){
	
	document.querySelector('.navigation__button').click();
	count-= 2;
	
}

function burgerClick() {
	
	$(".navigation__link.js-open-main_tab_1").css("display", "block");
	$(".navigation__link.js-open-main_tab_2").css("display", "block");
	$(".navigation__link.js-open-main_tab_3").css("display", "block");
	$(".navigation__link.js-open-main_tab_4").css("display", "block");
	$(".navigation__link.resume__link").css("display", "block");
	$(".navigation__link.drive__link").css("display", "block");
}

function burgerClickClose() {
	
	$(".navigation__link.js-open-main_tab_1").css("display", "none");
	$(".navigation__link.js-open-main_tab_2").css("display", "none");
	$(".navigation__link.js-open-main_tab_3").css("display", "none");
	$(".navigation__link.js-open-main_tab_4").css("display", "none");
	$(".navigation__link.resume__link").css("display", "none");
	$(".navigation__link.drive__link").css("display", "none");
}

function clickCount() {
	count+= 1;
	
	if (count%2==1) {
		burgerClick();
		
	}
	else{
		burgerClickClose();
	}

}