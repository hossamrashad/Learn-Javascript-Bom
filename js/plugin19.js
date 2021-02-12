/*globel console, document, window, alert, prompt, confirm */

console.log(document.cookie);

// path=/ يعنى الكوكاز يكون معاية فى جميع انحا الصفحات اللى تخص الصحة اللى انا فتحها

console.log(document.cookie = 'favFont=Cairo; expires=Fri Feb 19 2021 15:44:17 GMT+0200; path=/');

console.log(document.cookie);

console.log(new Date()); // بيجبلك التاريخ اللى انت فية

// لو عاوز تعدال فيه بتنساخه و تعدال عليها
console.log(document.cookie = 'favFont=Droid; expires=Fri Feb 19 2021 15:44:17 GMT+0200; path=/');

// لو عاوز تحزاف الكوكى
// لو عاوز تعدال فيه بتنساخه و تعدال عليها
console.log(document.cookie = 'favFont=; expires=Fri Feb 1 2021 15:44:17 GMT+0200; path=/');

/*
 * موقع للكوكاز تختر منو
 *
 * https://github.com/florian/cookie.js
 * */
