/*globel console, document, window, alert, prompt, confirm */

/*
 *
 * Properties protocol , search, pathname
 *
 * التلاتة بيجيبو القيمو و بيقدارو يغيروها
 *
 * protocol = http / https / file / mailto / ftp /
 *
 * mailto اللى هو ببعت بيه الرسايل
 * ftp اللى هو برفاع بيه الملافات من على جهازى
 *
 *
 * */

// = http
// بجيب الوكال بروتكال
console.log(window.location.protocol);

// بعمال سات للوكال بروتكةال
/*console.log(window.location.protocol = 'file');
console.log(window.location.protocol = 'http');*/

/************************/
// خاصة بى البحث فى العناصر بتاعت الصفحة و التناقل بينهام فى لغة البى اتش بى
console.log(window.location.search);



// اللى هى الاسلاش و اسم الصفحة على طاول
console.log(window.location.pathname);


// هيجبلى الشريط اللى فوق اللى هو مسار الصفحة اللى انا فتحه
console.log(window.location.hostname + window.location.pathname + window.location.search);
