/*globel console, document, window, alert, prompt, confirm */

var myButton = document.getElementById('myButton');

//var myResult = document.getElementById('myResult');

function clickOpen() {

    "use strict";
    // الاوتار هيات بيجيب مساحة الصفحة كلها
    console.log(window.outerHeight);

    // الانار هايت بيجيب مساحة اللى انت بتشوفه من غيرمساحة الكنسال
    console.log(window.innerHeight);
}

myButton.onclick = clickOpen;
