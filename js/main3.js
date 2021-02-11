/*globel console, document, window, alert, prompt, confirm */


function clikopenalert() {

    "use strict";

    //طريقة انو انت تعمال الارارت سطر تحت سطر و الاالرت بياخد الصفحة كلاها
    window.alert(' alert \n hello \n Hossam \n how are you');

}

var myButton = document.getElementById('openAlert');

myButton.onclick = clikopenalert;

function clikopenconfirm() {

    "use strict";

    // الكنفارم اللى هو تنبيه على حاجة انت بتعملها فى الصفحة لو دست اوكى كد الكنفارم هيساوى تراو و لو دست على كانسال الكنفارم هيساوى فوالس
    confirm("confirm هال انت متاكد ");

}

var myButtonconfirm = document.getElementById('openConfirm');

myButtonconfirm.onclick = clikopenconfirm;

/* علشان الاخطاى اللى فى البراكتاس انو مش عارف الكنسال تبع مين بتكتاب قابلو واندو */

window.console.log(myButtonconfirm);

/**
 * [[Description]]
 */
function openGoogleUrl() {

    "use strict";

    var ask = window.confirm("Go To Goole هال انت متاكد ");

    if (ask === true) {

        window.location.href = ('https://www.google.com.eg/?gfe_rd=cr&dcr=0&ei=ryzBWoTqD9Oo4gS43oW4Cw');
    } else {

        window.confirm('welcome back');

    }
}

var openGoogle = document.getElementById('openGoogle');

openGoogle.onclick = openGoogleUrl;

/***************************************/

// prompt
/*
 * البرامبات اللى هو بتاسا الشخص على حاجة و بتديلو ميسال يكتاب اية فى الحقال الفاضى اللى فى البرمبات
 *
 * */

function myButtonPromptfunc() {

    "use strict";

    window.prompt("what is your name ? ", 'like my name');

}

var myButtonPrompt = document.getElementById('myButtonPrompt');

myButtonPrompt.onclick = myButtonPromptfunc;
