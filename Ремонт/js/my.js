"use strict"


const isMobile={
	Android:function(){
		return navigator.userAgent.match(/Android/i);
	},

	BlackBerry:function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},

	iOS:function(){
		return navigator.userAgent.match(/iphone|iPad|iPod/i);
	},

	Opera:function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},

	Windows:function(){
		return navigator.userAgent.match(/IEmobile/i);
	},

	any: function () {
		return(
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
			
	}
};


if (isMobile.any()){
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length>0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click",function(e){
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
}else{
	document.body.classList.add('_pc');
}

//меню бургер
const menuBody = document.querySelector('.menu__body');
const iconMenu =document.querySelector('.menu__icon');
if (iconMenu) {
	
	iconMenu.addEventListener("click",function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}



// прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
	menuLinks.forEach(menuLink=>{
menuLink.addEventListener('click',onMenuLinkClick);
	});

	function onMenuLinkClick(e){
		const menuLink=e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =gotoBlock.getBoundingClientRect().top+pageYOffset - document.querySelector('header').offsetHeight;
			if (iconMenu.classList.contains('_active')) {
		document.body.classList.remove('_lock')
		iconMenu.classList.remove('_active')
		menuBody.classList.remove('_active')
			}
			window.scrollTo({
				top:gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}



$(document).ready(function(){
	$('.slider').slick({
		arrows:true,         	//стрелки фключить выклбчить
		dots: true,         	//точки вкл, выкл
		slidesToShow:2,     	//кол-во показываемых слайдов
		slidesToScroll:1,   	// кол-во слайдов за пролистывание одного клика
		speed:300,          	//скорость пролистывания слайда
		easing:'linear',		//тип анимации при смене слайда
		infinite:true,			//бесконечный слайдер или нет
		initialSlide:1,			//с какого слайдера начинать показ
		autoplay:true,			//автовоспроизведение слайда
		autoplaySpeed:2000, 	//скорость автопролистывания
		pauseOnFocus:true,		//пауза при клике на слайдер 
		pauseOnHover:true,		//пауза при наведении на слайдер
		pauseOnDotsHover:true,  //паузы при наведении на точки управления 
		draggable:true,			//пролистывание мышкой слайдера
		swipe:true,				//пролистывание слайдера свайпом на мобильном устройстве
		touchThreshold:5,		//сколько нужно просвайпить чтобы пролистался слайдер чем больше значение тем мениьше просвайпить
		touchMove:true,			//будет ли передвигатся зажав палец, но свайпатся будет
		waitForAnimate:true,	//следующик клик на стрелку или точку будет только при завершенной анимации
		centerMode:false, 		//слайдер будет становиться по центу к нему класс. по умолчанию false8г 
		variableWidth:false,	//слайдер будет без пробела сплошная линия слайдов false по умолчанию
		rows:1,					//сколька рядов будет слайдер
		vertical:false,			//вертикальный слайдер
		verticalSwiping:false,	//вертикальная прокрутка
		
	
	});
});


