'use strict';

let htmlAce;
let cssAce;
let jsAce;

let htmlEditor = document.getElementById('htmlEditor');
let cssEditor = document.getElementById('cssEditor');
let jsEditor = document.getElementById('jsEditor');

htmlEditor.style.fontSize = '15px';
cssEditor.style.fontSize = '15px';
jsEditor.style.fontSize = '15px';

let resultFrame = document.getElementById('result');

let needUpdate = true;
let needSave = true;

let updateTimer;
let autosaveTimer;

$(document).ready(function() {
//	console.log('ready(function()');

	htmlAce = ace.edit('htmlEditor', {});
	cssAce = ace.edit('cssEditor');
	jsAce = ace.edit('jsEditor');

	htmlAce.setTheme("ace/theme/monokai");
	htmlAce.session.setMode("ace/mode/html");
	htmlAce.setValue(`<h1>Hellow World!</h1>`);

	cssAce.setTheme("ace/theme/monokai");
	cssAce.session.setMode("ace/mode/css");
	cssAce.setValue(`body {
    color: #f8f8c5;
    text-align: center;
    background-color: #272822;
}
`);

	jsAce.setTheme("ace/theme/monokai");
	jsAce.session.setMode("ace/mode/javascript");
	jsAce.setValue(`"use strict";

`);
	
	loadCode();
	
	setTimeout(updateStyle, 1500);
	
	htmlAce.getSession().on('change', function() { doUpdate(); });
	cssAce.getSession().on('change', function() { doUpdate(); });
	jsAce.getSession().on('change', function() { doUpdate(); });

	updateFrame();
	
	updateTimer = setInterval(updateFrame, 5000);
	autosaveTimer = setInterval(autosaveCode, 300000);
});

function doUpdate() {
	needUpdate = true;
	needSave = true;
}

function updateStyle() {
    let gutter = document.getElementsByClassName("ace_gutter")[0];
	//console.log(gutter);
	//console.log(window.getComputedStyle( gutter ,null).getPropertyValue('background-color'));
	//console.log(window.getComputedStyle( gutter ,null).getPropertyValue('color'));
	document.body.style["background-color"] = window.getComputedStyle( gutter ,null).getPropertyValue('background-color');
	document.body.style["color"] = window.getComputedStyle( gutter ,null).getPropertyValue('color');
}

function runCode() {
	updateFrame();
}

function saveCode() {
    let htmlSave = htmlAce.getValue();
    let cssSave = cssAce.getValue();
    let jsSave = jsAce.getValue();
    localStorage.setItem('autosave_html', htmlSave);
    localStorage.setItem('autosave_css', cssSave);
    localStorage.setItem('autosave_js', jsSave);
	needSave = false;
}

function autosaveCode() {
	if (!needSave) { 
		return false; 
	};
	autosave_notify();
	saveCode();
}

function loadCode() {
	let htmlSave = localStorage.getItem("autosave_html");
	let cssSave = localStorage.getItem("autosave_css");
	let jsSave = localStorage.getItem("autosave_js");
	if (htmlSave !== null){
		htmlAce.setValue(htmlSave);
	};
	if (cssSave !== null){
		cssAce.setValue(cssSave);
	};
	if (jsSave !== null){
		jsAce.setValue(jsSave);
	};	
	needSave = false;
	//htmlAce.session.replace(new ace.Range(0, 0, 1, 1), htmlSave);
	//cssAce.session.replace(new ace.Range(0, 0, 1, 1), cssSave);
	//jsAce.session.replace(new ace.Range(0, 0, 1, 1), jsSave);		
}

function updateFrame() {
	
	//console.log('update Enter');
	if (!needUpdate) { 
		return false; 
	};
	//console.log('update Do');
	
	let res = resultFrame.contentWindow.document;
	
	let code = `<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="content-type" content="text/html" />
	<meta name="author" content="" />
	<style>` + cssAce.getValue() + `</style>
	<title></title>
</head>

<body>

` + htmlAce.getValue() + `

	<script>` + jsAce.getValue() + `</script>
</body>
</html>`
	
	res.open();
	res.write('<style>' + cssAce.getValue() + '</style>');
	res.write('<script>' + jsAce.getValue() + '</script>');
	res.write(htmlAce.getValue());
	res.close();
	
	needUpdate = false;	
}

Lobibox.notify.DEFAULTS.soundPath = 'assets/plugins/notifications/sounds/';
//Lobibox.notify.OPTIONS.info.sound = 'sound3';
//Lobibox.notify.DEFAULTS.delay = 1500;
//Lobibox.notify.DEFAULTS.volume = .1;

	 function autosave_notify(){
		Lobibox.notify('info', {
		pauseDelayOnHover: false,
		continueDelayOnInactiveTab: false,
		size: 'mini',
//		position: 'bottom right',
		icon: 'fa fa-save',
		width: 200,
		msg: 'Autosaved',
		sound: 'sound3',
		volume: .1,
		delay: 1500
		});
	  } 