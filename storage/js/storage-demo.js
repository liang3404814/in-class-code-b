/* storage-demo.js
    script for local storage demo
*/

const BG_COLOR_KEY = 'bgcolor';

//doc ready function
$(function(){

	if (Modernizr.localstorage) {
		var bgColor = localStorage.getItem(BG_COLOR_KEY);
		$('body').css('background-color', bgColor);
		$('.bg-color-input').val(bgColor);
	}

	$('.save-bg-color').click(function(){
		if (Modernizr.localstorage) {
			var bgColor = $('.bg-color-input').val();
			localStorage.setItem(BG_COLOR_KEY, bgColor);
			$('body').css('background-color', bgColor);
		}
	});

	$('.clear-bg-color').click(function(){
		if (Modernizr.localstorage) {
			localStorage.removeItem(BG_COLOR_KEY);
			window.location.reload();
		}
	});
});