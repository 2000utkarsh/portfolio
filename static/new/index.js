$(document).ready(function(){

	function removeOpenClass(){
		$('.all_tabs').each(function(i,el){
			if ($(el).hasClass('open')) {
				$(el).removeClass('open');
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
		$('.main_tab_1').addClass('open')
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_2').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_2').addClass('open')
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_3').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_3').addClass('open')
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_4').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_4').addClass('open')
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});
});