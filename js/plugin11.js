/*globel console, document, window, alert, prompt, confirm */

/*
 * Location properties , href
 *
 * موقاع الصفحة
 * ممكن توادية على مكان فى الصفحة
 * window.location.href = '#youtube';
 * ممكن يفتاح الميال
 *  window.location.href = 'mailto:bibo2010508@yahoo.com';
 * [ftp, mail, file ] داو حجات يقدار يفتحهم الوكيشان
 *
 * */

// بيجبلاك موقع الصفحة اللى انت فتحها
// كدا انا جبت اللكيشان
console.log(window.location.href);

// انا ممكن اغير مسار المللاف اللى انا فية و افتح صفحة تانية
var myButton = document.getElementById('myButton');

function clickOpen() {

    "use strict";
    window.location.href = 'http://youtube.com';
}

myButton.onclick = clickOpen;


var myButton1 = document.getElementById('myButton1');

function clickOpen() {

    "use strict";
    window.location.href = 'mailto:bibo2010508@yahoo.com';
}

myButton1.onclick = clickOpen;

// لو عاوز اروح على صفحة جنب الصفحة اللى انا فيها

var myButton2 = document.getElementById('myButton2');

function clickOpen2() {

    "use strict";
    window.location.href = 'index10.html';

}

myButton2.onclick = clickOpen2;
