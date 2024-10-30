function functionMenuHorizontal() {
	let menuHorizontal = document.querySelector(".extraDiv");
	if (menuHorizontal.style.width >= "250px") {
		menuHorizontal.style.width = "0px";
	} else {
		menuHorizontal.style.width = function2();
	}
	function function2() {
		const x = "280px";
		const y = "250px";
		if (window.innerWidth>=950) {
        	return x;
        } else {
        	return y;
        }
	}
}
function functionHello() {
	let a = document.querySelector(".menu1");
	let b = document.querySelector(".menu2");
	let c = document.querySelector(".menu3");
	let d = document.querySelector(".menu4");
	let words = document.querySelectorAll(".words");
	let button1 = document.querySelector(".buttonWords1");
	let button2 = document.querySelector(".buttonWords2");
	let button3 = document.querySelector(".buttonWords3");
	let button4 = document.querySelector(".buttonWords4");
	let menuHorizontal2 = document.querySelector(".extraDiv2");
	if (menuHorizontal2.style.width != "100%") {
		menuHorizontal2.style.transition = "width 1s";
		button1.style.transition = "opacity 1.3s";
		button1.style.opacity = "1";
		button2.style.transition = "opacity 1.6s";
		button2.style.opacity = "1";
		button3.style.transition = "opacity 1.9s";
		button3.style.opacity = "1";
		button4.style.transition = "opacity 2.2s";
		button4.style.opacity = "1";
		for (var i = 0; i < words.length; i++) {
			words[i].style.color = "white";
		}
		menuHorizontal2.style.width = "100%";
	} else {
		menuHorizontal2.style.transition = "width 0.3s";
		button1.style.transition = "opacity 0s";
		button1.style.opacity = "0";
		button2.style.transition = "opacity 0s";
		button2.style.opacity = "0";
		button3.style.transition = "opacity 0s";
		button3.style.opacity = "0";
		button4.style.transition = "opacity 0s";
		button4.style.opacity = "0";
		for (var i = 0; i < words.length; i++) {
			words[i].style.color = "transparent";
		}
		menuHorizontal2.style.width = "0%";
		a.style.height="0px";
		b.style.height="0px";
		c.style.height="0px";
		d.style.height="0px";
	}
}

function fmenu1() {
	let a = document.querySelector(".menu1");
	let b = document.querySelector(".menu2");
	let c = document.querySelector(".menu3");
	let d = document.querySelector(".menu4");
	if (a.style.height!="250px") {
		a.style.height="250px";
		b.style.height="0px";
		c.style.height="0px";
		d.style.height="0px";
	} else {
		a.style.height="0px";
	}
}
function fmenu2() {
	let a2 = document.querySelector(".menu1");
	let b2 = document.querySelector(".menu2");
	let c2 = document.querySelector(".menu3");
	let d2 = document.querySelector(".menu4");
	if (b2.style.height!="250px") {
		a2.style.height="0px";
		b2.style.height="250px";
		c2.style.height="0px";
		d2.style.height="0px";
	} else {
		b2.style.height="0px";
	}
}
function fmenu3() {
	let a = document.querySelector(".menu1");
	let b = document.querySelector(".menu2");
	let c = document.querySelector(".menu3");
	let d = document.querySelector(".menu4");
	if (c.style.height!="70px") {
		a.style.height="0px";
		b.style.height="0px";
		c.style.height="70px";
		d.style.height="0px";
	} else {
		c.style.height="0px";
	}
}
function fmenu4() {
	let a = document.querySelector(".menu1");
	let b = document.querySelector(".menu2");
	let c = document.querySelector(".menu3");
	let d = document.querySelector(".menu4");
	if (d.style.height!="70px") {
		a.style.height="0px";
		b.style.height="0px";
		c.style.height="0px";
		d.style.height="70px";
	} else {
		d.style.height="0px";
	}
}