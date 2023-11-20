
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



	const warmPath = anime.path('.warm__path svg path')
	const warmScroll =  anime({
		targets: '.scroll-warm__ball',
		translateX: warmPath( 'x' ),
		translateY: warmPath( 'y' ),
		duration: 600,
		easing: 'linear',
		autoplay: false,
		loop: false,
	})

	const warmTouch =  anime({
		targets: '.touch-warm__ball',
		translateX: warmPath( 'x' ),
		translateY: warmPath( 'y' ),
		duration: 1600,
		easing: 'linear',
		autoplay: false,
		loop: false,
	})

	const recomendAnim = anime({
		targets: [...document.querySelectorAll('.recomend-item')],
		duration: 500,
		opacity: [0, 1],
		loop: false,
		autoplay: false,
		filter: {
			delay: 200,
			value: ['blur(10px)', 'blur(0px)'],
		},
		translate: function(el, i) {
			return i%2 ? ['-800px 100px', '0px 0px'] : ['-800px -100px', '0px 0px']
		}, 
	})

	const catalogAnim = anime({
		targets: [...document.querySelectorAll('.main-catalog > div')],
		opacity: {
			duration: 1200,
			value: [0 , 1]
		},
		filter: {
			delay: 300,
			duration: 500,
			value: ['blur(10px)', 'blur(0px)'],
		},
		easing: 'easeInOutBack',
		autoplay: false,
		elasticity: 200,
		loop: false,
		delay: anime.stagger(100, {from: 'center'})
	})

	const rotateOnScroll = anime.timeline({
		targets: document.querySelector('.banner__xs'),
		easing: 'linear',
		autoplay: false,
		elasticity: 200,
	}).add({
		duration: 1200,
		translateY: ['0vh', '200vh'],
	}).add({
		duration: 300,
		translateX: ['0vh', '-50vh'],
		translateY: ['200vh', '240vh'],
	}).add({
		targets: document.querySelectorAll('.card-item__content p '), 
		opacity: 1, 
		duration: 300,
	})




	const animeApply = [
		{
			target: 'main-catalog',
			animation: catalogAnim,
			remove: true,
			scroll: false,
			play(){this.animation.play()},
			seek(){},
		},
		{
			target: 'scroll-warm',
			animation: warmScroll,
			remove: true,
			scroll: true,
			play(){this.animation.play()},
			seek(scrollPercent, speed = 2.5, offset = 600 ){ 
				this.animation.seek( ((scrollPercent + offset) / speed) )
			},
		},
		{
			target: 'recomend',
			animation: recomendAnim,
			remove: true,
			scroll: true,
			play(){this.animation.play()},
			seek(scrollPercent, speed = 1.2, offset = 800 ){ 
				this.animation.seek( ((scrollPercent + offset) / speed) )
			},
		},
		{
			target: 'main-banner',
			animation: rotateOnScroll,
			remove: true,
			scroll: true,
			play(){this.animation.play()},
			seek(scrollPercent, speed = 2.2, offset = 800 ){ 
				this.animation.seek( ((scrollPercent + offset) / speed) )
			},
		},
	]

	let observeOptions = { 
		threshold: [.5], 
		rootMargin: "200px", 
	}


	const scrollHandler = (el, scroll) => {
		let scrollPercent = 0
		return scrollPercent = scroll - el.offsetTop
	}
	
	function isVsible( entries ) {
		entries.forEach( entry => {
			if(entry.isIntersecting) {

				animeApply.forEach( el => {
					if(entry.target.classList.contains(el.target)) {
		
						if(el.scroll) {
							window.addEventListener('scroll', () => {
								el.seek(scrollHandler(entry.target, window.scrollY))
							}) 
						} else { el.play() }
						el.remove ? observer.unobserve(entry.target) : null

					} 
				})

			} 
		});
	}


	let observer = new IntersectionObserver(isVsible, observeOptions);
	const animeElements = []
	animeApply.forEach( el => animeElements.push(el.target))
	animeElements.forEach ( el => { observer.observe(document.querySelector(`.${el}`)) })


	document.querySelector('.touch-warm__ball').addEventListener('click' , () => { warmTouch.play() })



});

document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});