//mobile menu
var mobBurgerMenu = document.querySelector('.mob__burgermenu');
var mobItems = document.querySelector('.mob__items');
var mobClose = document.querySelector('.mob__close');
var body = document.body;
mobBurgerMenu.onclick = function() {
	mobItems.style.transform = 'translateX(0)';
	body.style.overflowY = 'hidden';
}
mobClose.onclick = function() {
	mobItems.style.transform = 'translateX(-100%)';
	body.style.overflowY = 'auto';
}


fixedNavigationMenu = function() {
	var e = document.querySelector(".menu-container");
	window.onscroll = function() {
		window.pageYOffset > 0 ? (e.style.backgroundColor = "rgba(245, 245, 245,.95)") : (e.style.backgroundColor = "", e.style.paddingTop = "")
	}
}
fixedNavigationMenu();


//popup
var callback = document.querySelectorAll('.callback');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__header-close');
var popupOverlay = document.querySelector('.popup__overlay');
var wrapper = document.querySelector('.wrapper');
for(i = 0; i < callback.length; i++) {
	callback[i].onclick = function() {
		if (popup.style.opacity == '1' && popup.style.zIndex == '9999') {
			popup.style.opacity = '0';
			popup.style.zIndex = '-1';
			popupOverlay.style.opacity = '0';
			popupOverlay.style.zIndex = '-1';
			wrapper.style.filter = 'blur(0)'
			body.style.overflowY = 'auto';
		} else {
			popup.style.opacity = '1';
			popup.style.zIndex = '9999';
			popupOverlay.style.opacity = '1';
			popupOverlay.style.zIndex = '50';
			wrapper.style.filter = 'blur(20px)'
			body.style.overflowY = 'hidden';
		}
	}
}
//popup close by button
popupClose.onclick = function() {
	popup.style.opacity = '0';
	popup.style.zIndex = '-1';
	popupOverlay.style.opacity = '0';
	popupOverlay.style.zIndex = '-1';
	wrapper.style.filter = 'blur(0)'
	body.style.overflowY = 'auto';
}
//if user resize window popup is close
window.onresize = function() {
	popup.style.opacity = '0';
	popup.style.zIndex = '-1';
	popupOverlay.style.opacity = '0';
	popupOverlay.style.zIndex = '-1';
	wrapper.style.filter = ''
	body.style.overflowY = 'auto';
	popup2.style.opacity = '0';
	popup2.style.zIndex = '-1';
	popup2Overlay.style.opacity = '0';
	popup2Overlay.style.zIndex = '-1';
}
//popup close by overlay
popupOverlay.onclick = function() {
	popup.style.opacity = '0';
	popup.style.zIndex = '-1';
	popupOverlay.style.opacity = '0';
	popupOverlay.style.zIndex = '-1';
	wrapper.style.filter = 'blur(0)'
	body.style.overflowY = 'auto';
}

//popup2
var callback2 = document.querySelectorAll('.callback2');
var popup2 = document.querySelector('.popup2');
var popup2Close = document.querySelector('.popup2__header-close');
var popup2Overlay = document.querySelector('.popup2__overlay');
var wrapper = document.querySelector('.wrapper');
for(i = 0; i < callback2.length; i++) {
	callback2[i].onclick = function() {
		if (popup2.style.opacity == '1' && popup2.style.zIndex == '9999') {
			popup2.style.opacity = '0';
			popup2.style.zIndex = '-1';
			popup2Overlay.style.opacity = '0';
			popup2Overlay.style.zIndex = '-1';
			wrapper.style.filter = 'blur(0)'
			body.style.overflowY = 'auto';
		} else {
			popup2.style.opacity = '1';
			popup2.style.zIndex = '9999';
			popup2Overlay.style.opacity = '1';
			popup2Overlay.style.zIndex = '50';
			wrapper.style.filter = 'blur(20px)'
			body.style.overflowY = 'hidden';
		}
	}
}

//popup close by button
popup2Close.onclick = function() {
	popup2.style.opacity = '0';
	popup2.style.zIndex = '-1';
	popup2Overlay.style.opacity = '0';
	popup2Overlay.style.zIndex = '-1';
	wrapper.style.filter = 'blur(0)'
	body.style.overflowY = 'auto';
}
//popup close by overlay
popup2Overlay.onclick = function() {
	popup2.style.opacity = '0';
	popup2.style.zIndex = '-1';
	popup2Overlay.style.opacity = '0';
	popup2Overlay.style.zIndex = '-1';
	wrapper.style.filter = 'blur(0)'
	body.style.overflowY = 'auto';
}

var serviceButton1 = document.getElementById('service_button1');
var serviceButton2 = document.getElementById('service_button2');
var service1 = document.getElementById('service1');
var service2 = document.getElementById('service2');


serviceButton1.onclick = function() {
	service2.style.opacity = '0';
	service2.style.display = 'none';
	service1.style.opacity = '1';
	service1.style.display = 'block';
	serviceButton1.classList.add('active');
	serviceButton2.classList.remove('active');
}

serviceButton2.onclick = function() {
	service2.style.opacity = '1';
	service2.style.display = 'block';
	service1.style.opacity = '0';
	service1.style.display = 'none';
	serviceButton1.classList.remove('active')
	serviceButton2.classList.add('active')
}

// blog slider
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			allowTouchMove: true,
		},
		991: {
			slidesPerView: 2,
			allowTouchMove: true,
		}
	},
	allowTouchMove: false,
  })

// directions slider
var swiper = new Swiper('.swiper-container.swiper-container2', {
	slidesPerView: 2,
	nested: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		800: {
			slidesPerView: 1,
		},
		991: {
			slidesPerView: 2,
		}
	},
})

// calculator in popup
function result(){
	var num1, num2, num3, num4, summ1, summ2, summ3, summ4, summ5, percent;
	num1 = document.getElementById('workers').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('salary-workers').value;
	num2 = parseInt(num2);
	num3 = document.getElementById('money').value;
	num3 = parseInt(num3);
	num4 = document.getElementById('intro-items').value;
	num4 = parseInt(num4);

	percent = Math.floor((((num1 * num2 * 12 * .3) - (num1 * num2 * 12 * .14)) / (num1 * num2 * 12 * .3)) * 100);
	summ1 = Math.floor((num1 * num2 * 12 * .3) - (num1 * num2 * 12 * .14));
	summ2 = Math.floor(num3 * .2);
	summ3 = Math.floor(num3 * .18);
	summ4 = Math.floor(num4 * .28);

	//checks of amounts
	if ((summ2 !== summ2) && (summ3 !== summ3) && (summ4 !== summ4)) {
		summ5 = Math.floor(summ1);
	}

	else if ((summ1 !== summ1) && (summ4 !== summ4)) {
		summ5 = Math.floor(summ2 + summ3);
	}

	else if ((summ1 !== summ1) && (summ2 !== summ2) && (summ3 !== summ3)) {
		summ5 = Math.floor(summ4);
	}

	else if (summ4 !== summ4) {
		summ5 = Math.floor(summ1 + summ2 + summ3);
	}

	else if ((summ2 !== summ2) && (summ3 !== summ3))  {
		summ5 = Math.floor(summ1 + summ4);
	}

	else if (summ1 !== summ1) {
		summ5 = Math.floor(summ2 + summ3 + summ4);
	}

	else {
		summ5 = Math.floor(summ1 + summ2 + summ3 + summ4);
	}

	// html replace if got error in calculations
	document.getElementById('workers-economy').innerHTML = summ1 + ' руб.';
	document.getElementById('percent').innerHTML = '&nbsp;(' + percent + '%)';
	document.getElementById('money-economy').innerHTML = summ2 + ' руб. (100%)';
	document.getElementById('taxes-economy').innerHTML = summ3 + ' руб. (100%)';
	document.getElementById('intro-items-economy').innerHTML = summ4 + ' руб. (100%)';
	document.getElementById('final-economy').innerHTML = summ5 + ' руб.';


	if (document.getElementById('money').value == '') {
		document.getElementById('money-economy').innerHTML = '0 руб.&nbsp;(0%)';
		document.getElementById('taxes-economy').innerHTML = '0 руб.&nbsp;(0%)';
	}

	if (document.getElementById('workers').value == '' ||
		document.getElementById('salary-workers').value == '' &&
		document.getElementById('intro-items').value == '' &&
		document.getElementById('money').value == '') {
		document.getElementById('workers-economy').innerHTML = '0 руб.';
		document.getElementById('percent').innerHTML = '&nbsp;(0%)';
		document.getElementById('final-economy').innerHTML = '0 руб.';
	}

	if (document.getElementById('workers').value == '' &&
		document.getElementById('salary-workers').value == '' ) {
		document.getElementById('workers-economy').innerHTML = '0 руб.';
		document.getElementById('percent').innerHTML = '&nbsp;(0%)';
		document.getElementById('final-economy').innerHTML = summ5 + ' руб.';
	}

	if (document.getElementById('workers').value == '' ||
		document.getElementById('salary-workers').value == '' ) {
		document.getElementById('workers-economy').innerHTML = '0 руб.';
		document.getElementById('percent').innerHTML = '&nbsp;(0%)';
		document.getElementById('final-economy').innerHTML = summ5 + ' руб.';
	}

	if ((document.getElementById('workers').value !== '' ||
		document.getElementById('salary-workers').value !== '') &&
		document.getElementById('intro-items').value == '' &&
		document.getElementById('money').value == '') {
		document.getElementById('final-economy').innerHTML = '0 руб.';
	}

	if ((document.getElementById('workers').value !== '' &&
		document.getElementById('salary-workers').value !== '') &&
		document.getElementById('intro-items').value == '' &&
		document.getElementById('money').value == '') {
		document.getElementById('final-economy').innerHTML = summ5 + ' руб.';
	}

	if (document.getElementById('workers').value == '' &&
		document.getElementById('salary-workers').value == '' &&
		document.getElementById('intro-items').value == '' &&
		document.getElementById('money').value == '') {
		document.getElementById('workers-economy').innerHTML = '0 руб.';
		document.getElementById('percent').innerHTML = '&nbsp;(0%)';
		document.getElementById('money-economy').innerHTML = '0 руб.&nbsp;(0%)';
		document.getElementById('taxes-economy').innerHTML = '0 руб.&nbsp;(0%)';
		document.getElementById('intro-items-economy').innerHTML = '0 руб.&nbsp;(0%)';
		document.getElementById('final-economy').innerHTML = '0 руб.';
	}

	if (document.getElementById('intro-items').value == '') {
		document.getElementById('intro-items-economy').innerHTML = '0 руб.&nbsp;(0%)';
	}

	//hidden field in footer form
	//passing value to the handler (mail.php)
	document.getElementById('summ').value = summ5 + ' руб.';

}

//reset calculator
var buttonReset = document.querySelector('.popup__button-reset')
buttonReset.onclick = function() {
	document.getElementById('workers-economy').innerHTML = '0 руб.';
	document.getElementById('money-economy').innerHTML = '0 руб.&nbsp;(0%)';
	document.getElementById('intro-items-economy').innerHTML = '0 руб.&nbsp;(0%)';
	document.getElementById('taxes-economy').innerHTML = '0 руб.&nbsp;(0%)';
	document.getElementById('final-economy').innerHTML = '0 руб.';
	document.getElementById('percent').innerHTML = '&nbsp;(0%)';
}

//send calculator info
var sendCalc = function sendMail(selector) {
  return fetch('/mail.php', {
	method: 'POST',
	body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
	alertify.error("Ошибка. Повторите отправку позже");
  });
};

//send massage popup
var sendMsg = function sendMail(selector) {
  return fetch('/callback.php', {
	method: 'POST',
	body: new FormData(document.querySelector(selector))
  }).catch(function (error) {
	alertify.error("Ошибка. Повторите отправку позже");
  });
};

// alert for calculator popup
const popupCalc = () => {
	const form = document.querySelector('#popup-form')
	form.onsubmit = (e) => {
	  e.preventDefault();
	  sendCalc('#popup-form').then(alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/).then(form.reset())
	}
}
popupCalc();

// alert for message popup
const popupMsg = () => {
	const form = document.querySelector('#popup2-form')
	form.onsubmit = (e) => {
	  e.preventDefault();
	  sendMsg('#popup2-form').then(alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/).then(form.reset())
	}
}
popupMsg();

//smoothscroll
new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    after: function() {
        document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "0px"
    }
});

//close menu by click on item
var mobItem = document.querySelectorAll('.mob__item');
for (i = 0; i < mobItem.length; i++){
	mobItem[i].onclick = function() {
		mobItems.style.transform = 'translateX(-100%)';
		body.style.overflowY = 'auto';
	}
}

// mask for "tel" input
var input = document.querySelectorAll('input[type="tel"]')
var mask = new Inputmask("+7 (999) 999-99-99");
for (i = 0; i < input.length; i++){
var input = document.querySelectorAll('input[type="tel"]')
	mask.mask(input[i]);
}

//only numbers in the fields
$('.popup__item-input input').on('keydown', function(e){
	if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
	  return false;
	};
})

