/*globel console, document, window, alert, prompt, confirm */

/*
 *
 * Location Properties Hash, Host
 *
 * location.host اللى هو الهاست اللى هى الستصضافة بتاعت الموقاع اللى انت فاتحو و ملهوش دعوة اى لنك فارعى
 * */

// انا كدا عمالت جات لللوكيشان هواست
//console.log(window.location.host);

// انا هنا عمالت سات للوكيشان هواست و هانج اصفحة عمالة تعمال ريلود
//console.log(window.location.host = 'www.google.com');

// مرجعش حاجة من الهاش
//console.log(location.hash);

// هشياك انو الشخص جاى من مكان معين و ساعت ما يكون جى من المكان ده يطلعلو فى الكنسال حاجة
// مشتغلاتش معاية لانو معتمده على اللوكيشان هاش

if (window.location.hash.indexOf('chat') > -1) {

    console.log('you from chat');
}
