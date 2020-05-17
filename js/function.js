/*=============================
Функции для создания элементов игры
=================================*/
// <div id="sound-blok">
//     	<button id="knopka-sound"></button>
//  	</div>

// создание кнопки sound
function sozdanieSoundBlok() {
	//создаем блок див <div id="sound-blok">
	soundBlok = document.createElement("div");//создаем элемент с параметром div
	soundBlok.id = "sound-blok";//добавляем тегу div=>id="sound-blok"
	knopkaSound = document.createElement("button");//создаем кнопку knopkaSound
	knopkaSound.id = "knopka-sound";//добавляем тегу div=>id="knopka-sound"
	soundBlok.appendChild(knopkaSound);//добавляем кнопку sound в блок soundBlok
	document.body.appendChild(soundBlok);//добавляем блок soundBlok в блок <body> HTML
}
sozdanieSoundBlok();

// <div id="nastroika-blok">
//     	<button id="knopka-nastroika"></button>
//  	</div>
// создание кнопки nastroika
function sozdanieNastroikaBlok() {
	//создаем блок див <div id="nastroika-blok">
	nastroikaBlok = document.createElement("div");//создаем элемент с параметром div
	nastroikaBlok.id = "nastroika-blok";//добавляем тегу div=>id="nastroika-blok"
	knopkaNastroika = document.createElement("button");//создаем кнопку knopkaSound
	knopkaNastroika.id = "knopka-nastroika";//добавляем тегу div=>id="knopka-nastroika"
	nastroikaBlok.appendChild(knopkaNastroika);//добавляем кнопку knopkaNastroika в блок nastroikaBlok
	document.body.appendChild(nastroikaBlok);//добавляем блок nastroikaBlok в блок <body> HTML
}
sozdanieNastroikaBlok();


	// <div id="start-blok">
 //    	<button id="knopka-start"></button>
 // 	</div>
 // создание кнопки start
function sozdanieStartBlok() {
	//создаем блок див <div id="start-blok">
	startBlok = document.createElement("div");//создаем элемент с параметром div
	startBlok.id = "start-blok";//добавляем тегу div=>id="start-blok"
	knopkaStart = document.createElement("button");//создаем кнопку knopkaStart
	knopkaStart.id = "knopka-start";//добавляем тегу div=>id="knopka-start"
	startBlok.appendChild(knopkaStart);//добавляем кнопку knopkaStart в блок startBlok
	document.body.appendChild(startBlok);//добавляем блок startBlok в блок <body> HTML
}
sozdanieStartBlok();

function sozdanieDirektive() {
//создаем блок <div id="direktive">
	var div = document.createElement("div");
<<<<<<< HEAD:js/function.js
		div.id = "direktive";
	//создаем блок <h2>движение вверх</h2>
=======
		div.id = "direktive";//добавляем тегу div=>id="direktive"
	//создаем блок <h2>движение вверх</h2>
>>>>>>> origin/master:function.js
	var h2 = document.createElement("h2");
		h2.id = "up";
		h2.innerText = "движение вверх";
		div.appendChild(h2);//добавляем в блок div заголовок h2
	//создаем блок <h2>движение вниз</h2>
	var h2 = document.createElement("h2");
		h2.id = "down";
		h2.innerText = "движение вниз";
		div.appendChild(h2);//добавляем в блок div заголовок h2
	//создаем блок <h2>движение вправо</h2>
	var h2 = document.createElement("h2");
		h2.id = "right";
		h2.innerText = "движение вправо";
		div.appendChild(h2);//добавляем в блок div заголовок h2
	//создаем блок <h2>движение влево</h2>
	var h2 = document.createElement("h2");
		h2.id = "left";
		h2.innerText = "движение влево";
	div.appendChild(h2);//добавляем в блок div заголовок h2

	//добавляем блок div в блок <body> HTML
	document.body.appendChild(div);
}

sozdanieDirektive()
