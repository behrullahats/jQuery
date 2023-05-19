//Form Olayları
// Blur Kullanımı : Nesneden uzaklaşında oluşabilecek olaylar

// $(function () {
//     $('#ad').blur(function () {
//         $('b').text("Umarım Doğru Girmişsindir...");
//     });
// });

//Blur Örneği

// $(function () {

//     $('#ad').blur(function () {
//         var a = $('#ad').val();
//         if (a == 'seyit') {
//             $('b').text('Aferim Doğru Girdin :) ');
//         } else {
//             $('b').text('İsmini Doğru Yaz... ');
//         }
//     });
//     $('#soyad').blur(function () {
//         var a = $('#soyad').val();
//         if (a == 'ateş') {
//             $('b').text('Aferim Doğru Girdin :) ');
//         } else {
//             $('b').text('Soyadını Doğru Yaz... ');
//         }
//     });

// });

//Change Kullanımı : Nesne Focus özelliğini kaybettiğinde ve içeriği değiştirildiğinde çalışır.

// $(function () {
//     $('#ad').change(function () {
//         var a = $('#ad').val();
//         $('b').text(a.length);
//     });
// });

//Focus Kullanımı : Nesneye odaklanırsa çalışır

// $(function () {
//     $('#ad').focus(function () {

//         $('b').text("ADINI DOĞRU GİR EVLAT");
//     });
//     $('#soyad').focus(function () {

//         $('b').text("SOYADINI DOĞRU GİR EVLAT");
//     });
// });

//Select Kullanımı : İnputun içerisinde yazdığımız yazıyı seçtiğimiz zaman devreye giren olaylar

// $(function () {
//     $('#ad').select(function () {
//         $('b').text('Yazı Seçildi');
//     });
// });

//Nesneyi Seçtiğimiz gibi Kopyalama

// $(function () {
//     $('#ad').select(function () {
//         $('b').text("Kopyalama Başarılı");

//         if (document.execCommand('copy')) {
//             alert("Kopyalama Başarılı");
//         }
//     });
// });


//Submit

// $(function () {
//     $('#forms').submit(function (event) {
//         if ($('#ad').val() != 4) {
//             alert("Sadece 4 rakamını girebilirsiniz");
//             event.preventDefault();
//         }
//     });
// });

//ödev

$(function () {
    $('#forms').submit(function (event) {
        if ($('#kad').val().length < 6) {
            $('b').text("Kullanıcı Adınız 6 karakterden az olamaz");
            event.preventDefault();
        }
    });
});