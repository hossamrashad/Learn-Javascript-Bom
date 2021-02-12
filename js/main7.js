/*globel console, document, window, alert, prompt, confirm */

/*
 *
 * scrollBy اللى هو بتزيح العنصار بى مساحة معينة
 * scrollBy(x , y) // number only in pixels
 *
 * sctollTo اللى هو بتحدد العنصر هيكون فين
 * scrollTo(x , y) // number only in pixels
 * */


document.getElementById('scrollBy').onclick = function () {

    "use strict";

    window.scrollBy(200, 150);

    window.console.log("windo scroll left " + window.scrollX);

    window.console.log("windo scroll Top " + window.scrollY);
};


document.getElementById('scrollTo').onclick = function () {

    "use strict";

    window.scrollTo(0, 0);

    window.console.log("windo scroll left " + window.scrollX);

    window.console.log("windo scroll Top " + window.scrollY);
};
