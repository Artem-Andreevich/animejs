
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


	class Clock {

		constructor( autoStart = true ) {
	
			this.autoStart = autoStart;
	
			this.startTime = 0;
			this.oldTime = 0;
			this.elapsedTime = 0;
	
			this.running = false;
	
		}
	
		start() {
	
			this.startTime = now();
	
			this.oldTime = this.startTime;
			this.elapsedTime = 0;
			this.running = true;
	
		}
	
		stop() {
	
			this.getElapsedTime();
			this.running = false;
			this.autoStart = false;
	
		}
	
		getElapsedTime() {
	
			this.getDelta();
			return this.elapsedTime;
	
		}
	
		getDelta() {
	
			let diff = 0;
	
			if ( this.autoStart && ! this.running ) {
	
				this.start();
				return 0;
	
			}
	
			if ( this.running ) {
	
				const newTime = now();
	
				diff = ( newTime - this.oldTime ) / 1000;
				this.oldTime = newTime;
	
				this.elapsedTime += diff;
	
			}
	
			return diff;
	
		}
	
	}
	
	function now() {
		return ( typeof performance === 'undefined' ? Date : performance ).now(); // see #10732
	}
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}



	// ROCKET ANIMATION
	let rocketTl = gsap.timeline()
	rocketTl.to('.rocket__fire', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 0,
				end: 1500,
			},
			height: 60,
			opacity: 1,
		})
	rocketTl.to('.rocket__cloud', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 500,
				end: 2500,
			},
			opacity: 1,
			height: 190
		})
	rocketTl.to('.rocket__cloud', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 4500,
				end: 6500,
			},
			y: 200,
			opacity: 0,
		})
	rocketTl.to('.rocket__stock', 
		{
			scrollTrigger: {
				scrub: 1,
				start: 4000,
				end: 5000,
			},
			rotate: -30,
			x: -250,
			opacity: 0,
			
		})
	rocketTl.to('.rocket', {
		scrollTrigger: {
			scrub: 1,
			start: '+=5500'
		},
		y: -200,

		})
	rocketTl.to('.rocket', {
		scrollTrigger: {
			scrub: 1,
			start: '+=8500'
		},
		rotate: 60,
		scale: .2
		})



	// BACKGROUND ANIMATION
	let sceneBG = gsap.timeline()
	sceneBG.add( gsap.to('.first-scene', {
		scrollTrigger: {
			scrub: .1,
			start: '+=4500',
			end: '+=8500',
			pin: true,
		},
		x: 0,
		y: '100vh',
		filter: 'blur(10px)',
	}))
	sceneBG.add( gsap.to('.second-scene', {
		scrollTrigger: {
			scrub: .1,
			start: '+=8500',
			end: '+=10500',
			pin: true,
		},
		x: 0,
		// y: '100vh',
		filter: 'blur(0px)',
	}))


	// STARS ANIMATION
	gsap.fromTo('.stars', 1.5,
		{
			top: 'random(0, 15)%',
			left: 'random(80, 99)%',
			z: 0,
			width: 'random(10, 100)',
			height: 'random(10, 100)',
			opacity: .7,
		},
		{
			top: 'random(80, 99)%',
			left: 'random(0, 15)%',
			z: 100,
			width: 'random(10, 100)',
			height: 'random(10, 100)',
			opacity: 0,
			repeat: -1,
			repeatDelay: 3,
			repeatRefresh: true,
		}
	)	
	

	// EARTH ANIMATION
	const earthTl = gsap.timeline()
	earthTl.to('.earth', {
		scrollTrigger: {
			scrub: 1,
			start: '+=12500',
			end: '+=40500',
		},
		rotate: '+=50'
	})
	earthTl.to('.earth', {
		scrollTrigger: {
			scrub: 1,
			start: '+=12500',
			end: '+=16500',
		},
		top: 0,
		right: '50%',
		x: '10%',
	})
	earthTl.to('.earth', {
		scrollTrigger: {
			scrub: 1,
			start: '+=16500',
			end: '+=22500',
		},
		scale: .3,
	})
	earthTl.to('.earth', {
		scrollTrigger: {
			scrub: 1,
			start: '+=22500',
			end: '+=40500',
		},
		yPercent: 100,
	})


	let clock = new Clock
	const tick = () => {
		let elapsedTime = clock.getElapsedTime()


		gsap.to('.rocket__pic',{
			scrollTrigger: {
				scrub: false,
				start: '+=1500',

			},
			duration: 1.2,
			x: Math.sin(elapsedTime * 10) * 5,
			y: Math.cos(elapsedTime * 5) * 5,
		})
		gsap.to('.rocket__fire',{
			scrollTrigger: {
				scrub: false,
				start: '+=1500',

			},
			duration: 1.2,
			height: Math.floor(Math.random() * (165 - 70 + 1) + 70),
			x: Math.sin(elapsedTime * 10) * 5,
			y: Math.cos(elapsedTime * 5) * 5,
		})
		gsap.to('.rocket__cloud',{
			scrollTrigger: {
				scrub: false,
				start: '+=1500',
				end: '+=5500'

			},
			duration: 1.2,
			height: Math.floor(Math.random() * (190 - 60 + 1) + 60),
			x: Math.sin(elapsedTime * 10) * 10,
		})

		window.requestAnimationFrame(tick)
	}
	tick()








});

document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});