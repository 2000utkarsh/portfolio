$(document).ready(function(){



	function removeOpenClass(){
		$('.all_tabs').each(function(i,el){
			if ($(el).hasClass('open')) {
				$(el).removeClass('open');
			}
		});
	}

	function hasOpenClass(){
		$('.all_tabs').each(function(i,el){
			if ($(el).hasClass('open')) {

				return 1;
			}
			else{
				return 0;
			}
		});
	}

	$('.js-close').on('click', function(e){
		e.preventDefault();
		removeOpenClass();
	});

	$('.js-open-main_tab_1').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_1').addClass('open');		
		$('.main_tab_1').css("display","block");		
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_2').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_2').addClass('open');
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_3').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_3').addClass('open');
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_4').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_4').addClass('open');
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});


	$(window).on('scroll',function(){
		console.log(hasOpenClass())
	    if(($(window).scrollTop()) > (792-($(window).innerHeight())) && !(hasOpenClass())){
	    	$('.all_tabs').css("display","none");
	    	$(document.body).css("overflow","hidden");
	    }
  });


});