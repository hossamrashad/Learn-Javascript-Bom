/*globel console, document, window, alert, prompt, confirm */

/* الواندو ابان موجوده فى المواقع اللى لما تدوس على زورار تفتحلك صفحات اعلانية تانية كتيرة  */

/*
 *
 * window.open(url, name or attribute, specification, history replace)
 *
 *
 * specification اللى هى خواص الصفحة
 * */

document.getElementById('open').onclick = function () {

    "use strict";

    //window.open("", "", "", ""); //بتفتاح صفحة فاضية خالص

    //window.open("https://www.google.com", "", "", ""); // بتفتاح الصفحة اندار سكوال بلانك

    //window.open("https://www.google.com", "_blank", "", ""); // اللى هو الصفحة هتفتاح فى صفحة جديدة و داه الدفالت فاليو

    // menubar اللى هو شريط الادوات اللى موجود فى الفيار فوكس
    //window.open("https://www.google.com", "_blank", "width=400,height=400,left=400,top=400,menubar=no,status=no", "");

    // true اللى هو الهسترى
    window.open("https://www.google.com", "_blank", "width=400,height=400,left=400,top=400,menubar=yes,status=yes", "true");
};
