a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
d = document.getElementById("acorn");
e = document.getElementById("acorn1");
f = document.getElementById("home");
var mySound = document.getElementById('cracking');
var mySound1 = document.getElementById('scrat');


function nextThirdImage(el){
	if (el.src.match("image/ice.png") && b.src.match("image/dirt.png") && c.src.match("image/dirt.png")){
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
		d.src = "image/boss_key.gif";
		e.src = "image/acorn.png"
		mySound1.play();
		alert("Scrat has his acorn!");
		d.classList.add('key');
		e.classList.add('image');
		a.classList.remove('pointer');
		f.classList.remove('pointer');
	} else {
	}
}

function nextSecondImage(el){
	if (a.src.match("image/ice.png") && el.src.match("image/ice.png") && c.src.match("image/dirt.png")){
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
		a.classList.add('pointer');
		b.classList.remove('pointer');
	} else {
	}
}

function nextFirstImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
		b.classList.add('pointer');
		c.classList.remove('pointer');
	} else {
	}
}

function checkOrder(el){
	if (a.src.match("image/dirt.png") && b.src.match("image/dirt.png") && c.src.match("image/dirt.png")){
	} else {
		alert("Scrat wants his acorn!");
	}
}
