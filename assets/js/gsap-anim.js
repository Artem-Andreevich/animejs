
$(function (){
	var ajaxInitialize = (function () {
		if (jQuery.fn.selectpicker) {
			$("select.selectpicker").selectpicker();
		}

		if (jQuery.fn.datetimepicker) {
			$('.datetimepicker-input').datetimepicker({
				format: 'L',
				locale: 'RU'
			});
		}

		if (jQuery.fn.inputmask) {
			$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
		}
	});

	$(document).ajaxComplete(ajaxInitialize);

	if (jQuery.fn.selectpicker) {
		$("select.selectpicker").selectpicker();
	}

	if (jQuery.fn.datetimepicker) {
		$('.datetimepicker-input').datetimepicker({
			format: 'L',
			locale: 'RU'
		});
	}

	if (jQuery.fn.inputmask) {
		$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
	}

	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});

	/*oform-input valid*/
	$(document).on('keyup', '.input-item', function() {
		if ( $(this).find('input').length > 0 ) {
			if ( $(this).find('input').val().length === 0 ) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
		if ( $(this).find('textarea').length > 0 ) {
			if ( $(this).find('textarea').val().length === 0 ) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
	});
	/*end oform-input valid*/

	/*file name*/
	$('.input-file input').change(function(event){
		files = event.target.files;
		$(this).parents('.input-file').find('span').text($(this).val().replace(/.+[\\\/]/, ""));
	});
	/*end file name*/

	if ( $('[data-fancybox]').length > 0 ) {
		$('[data-fancybox]').fancybox({
			loop: true,
			thumbs : {
				autoStart : true
			}
		});
	}



	let rocketTl = gsap.timeline()
	rocketTl.to('.rocket__fire', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 0,
				end: 1500,
			},
			height: 150,
			opacity: .6,
		})
	rocketTl.to('.rocket__cloud', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 1500,
				end: 2500,
			},
			opacity: 1,
			height: 200
		})
	rocketTl.to('.rocket__cloud', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 4000,
				end: 5500,
			},
			y: 200,
			opacity: 0,
		})
	rocketTl.to('.rocket__stock', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 4000,
				end: 5500,
			},
			x: -500,
			opacity: 0,
			
		})
	rocketTl.to('.rocket', {
		scrollTrigger: {
			scrub: 1,
			start: '+=5500'
		},
		y: -500,
	})
	rocketTl.to('.rocket', {
		scrollTrigger: {
			scrub: 1,
			start: '+=8500'
		},
		rotate: 40,
		scale: .2
	})




	let sceneBG = gsap.timeline(".first-scene", {})
	sceneBG.add( gsap.to('.first-scene', {
		scrollTrigger: {
			scrub: .1,
			start: '+=4500',
			pin: true,
		},
		x: 0,
		y: 2000,
	}))













});

document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});