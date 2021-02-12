/*globel console, document, window, alert, prompt, confirm */

/* setTimeOute | clearTimeout
 *
 * setTimeOute( function,milliseconds, param1, param2 )
 *
 * setTimeOute هى حاجة بتستنى على الصفحة و بعدين بتنافز الاكشان اللى هو الفانكشان اللى انت عملها
 * */

setTimeout(function () {

    "use strict";

    var myElement = document.getElementById('test');

    myElement.style.display = 'none';

}, 3000);


/********************************************/

// طريقة كتابة السات تيم بطريقة تانية

function writeMerssage() {

    "use strict";

    var myElement = document.getElementById('test1');

    myElement.style.display = 'none';

};

var myTime = setTimeout(writeMerssage, 5000);


/******************************************/

// ازاى اواقف السات تيم من خلال الزورار قابل ما الفنكشان تتام

var myButton = document.getElementById('button');


myButton.onclick = function () {

    "use strict";

    clearTimeout(myTime);
};
