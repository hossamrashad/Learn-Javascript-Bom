/*globel console, document, window, alert, prompt, confirm  */

/*
 * setInterval, ClearInterval
 *
 *
 * setInterval( function,milliseconds, param1, param2 )
 *
 * setInterval هو انو افنكشان بتشتغال الى ما لا نهاية
 * */

var myButton = document.getElementById('button');

function writeMerssage() {

    "use strict";

    window.console.log("Hello every 2 secounds");

}

var myTime = setInterval(writeMerssage, 2000);

// ازاى اواقف السات تيم من خلال الزورار قابل ما الفنكشان تتام

myButton.onclick = function () {

    "use strict";

    clearInterval(myTime);
};

/**************************/

/* ازاى اعمال العداد  */

var myButton1 = document.getElementById('button1');

var myDiv = document.getElementById('show');

var myTime;

function countDown() {

    "use strict";

    if (myDiv.textContent <= 0) {

        myDiv.textContent = 'Done..';

        // ازاى اواقف السات انتارفال

        clearInterval(myTime);

    } else {

        myDiv.textContent = myDiv.textContent - 1;
    }
}

var myTime = setInterval(countDown, 1000);
