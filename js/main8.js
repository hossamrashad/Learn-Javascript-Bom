/*globel console, document, window, alert, prompt, confirm */

/*
 *
 * stop , clese, focus
 *
 * stop بيوقاف تحميل الصفحة و يعراض اللى اتحمل
 * */
window.stop();

window.onload = function () {

    "use strict";
    window.open('https://www.google.com/', 'googl', 'width=300,height=300');
};

var myxwindow = window.open('https://www.google.com/', 'googl', 'width=300,height=300');

var myButton = document.getElementById('myButton2');

function openGoogle() {

    "use strict";
    window.open('https://www.google.com/', 'googl', 'width=300,height=300');
    myxwindow.focus();
}

myButton.onclick = openGoogle;


var myButton3 = document.getElementById('myButton3');

function closeGoogle3() {

    "use strict";
    window.close();
}

myButton3.onclick = closeGoogle3;


var myButton4 = document.getElementById('myButton4');

function focusGoogle4() {
    // الفوعاس بيخالى الصفحة اللى انت فتحتها تكون هى الفعالة
    "use strict";
    myxwindow.focus();
}

myButton4.onclick = focusGoogle4;
