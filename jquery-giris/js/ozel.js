// $(document).ready(function () {
//     $("p").click(function () {
//         $(this).hide();
//     });
// });



// // 1.Yönten
// $(document).ready(function () {

//     $('i').html("Seyit Behrullah Ateş");

// });


// // 2. Yöntem
// $().ready(function () {

//     $('b').html("22 dir");

// });

// //3.Yöntem
// $(function () {
//     $("b").html("Merhaba Nasılsın Bakalım İyi misin?");
// });

// $(document).ready(function () {

//     $('small').html("Merhaba Ben Küçük Yazı olan Small Etiketiyim");

// });

// $(document).ready(function () {
//     $('i').html("Merhaba Ben Eğik yazı olan İ Etiketiyim");
// });

// $(document).ready(function () {
//     $('div').html("Merhaba Ben Kutucuk olan Div Elemanıyım");
// });

// $(document).ready(function () {
//     $("footer").html("Merhaba Ben Sayfanın sonunda bulunan footer elemanıyım");
// });
// $(function () {
//     $('nav').html("Merhaba Ben Sayfanın Başında bulunan Nav Elamanıyım");
// });

// $().ready(function () {
//     $('nav').html("Merahab Ben SAYFANIN BAŞINDA BULUNAN NAV ELEMANIYIM");
// });
// $(document).ready(function () {

//     $('nav').html("Merhaba ben Sayfanın Başında bulunan nav elemanıyım birinci yöntem");
// });


// function islem() {
//     $('div').html("Bu elemanı çağırmak için butona tıkladın");
// }

// function kapama() {
//     $('div').html("");
// }

// $('.acma').click(islem);
// $('.kapama').click(kapama);


// function ackapa() {
//     $('.deneme').toggle();
// }

//TAG SEÇİCİ
// $(document).ready(function () {
//     $('div').css('color', 'red');
// });

//İD CLASS SEÇİCİ

// $(document).ready(function () {


//     $('h2').css({
//         'color': 'green',
//         'font-size': '50px',
//         'font-family': 'arial'
//     });
//     $('.php,#html').css({
//         'font-size': '24px',
//         'font-weight': 'bold',
//         'font-family': 'arial',
//     });
//     $('.php').css('color', 'purple');
//     $('#html').css('color', 'orange');

// });

// Alternatif Seçiciler

// $(document).ready(function () {

//     //1.yol

//     // $('input').css({
//     //     'width': '250px'
//     // });

//     //2.yol

//     // $('input:text,input:password').css({
//     //     'width': '200px'
//     // });

//     // 3.Yol

//     $('input[type="text"],input[type="password"]').css({
//         'width': '250px'
//     });


// });


// Sıralamalı Seçiciler

// $(document).ready(function () {


//     // //Birinci sıradaki işleme sokar
//     // $('li:first').css({
//     //     'background-color': 'red'
//     // });
//     // //Sonuncu sıradaki işleme sokar
//     // $('li:last').css({
//     //     'background-color': 'red'
//     // });


//     // Tek sıralı halinde sıralama

//     $('li:odd').css({
//         'background-color': 'red'
//     });
//     $('li:even').css({
//         'background-color': 'green'
//     });

// });

//Sıralamalı Seçiciler Tablo Gösterimi


// $(document).ready(function () {


//     $('.alt:odd').css({
//         'background-color': 'red'
//     });
//     $('.alt:even').css({
//         'background-color': 'yellow'
//     });
//     $('.ust').css({
//         'background-color': 'black',
//         'color': 'white',
//         'font-family': 'arial'

//     });


// });

//Çocuk Seçiciler

// $(document).ready(function () {

//     $('.column p:last').css({
//         'background-color': 'red'
//     });
//     $('.column p:odd').css({
//         'background-color': 'blue'
//     });



// });

//Elemanları Bulup Seçme

// $(document).ready(function () {
//     $('.column').find('b').css('color', 'red');
//     $('.a').find('strong').css('color', 'green');
//     $('.a').find('span').css({
//         'font-size': '24px'
//     });
// });

// Previos ve Next - Bulma Fonksiyonu


// $(document).ready(function () {

//     $('.bir').html("Bir");
//     $('.iki').html("İki");
//     $('.uc').html("Üç");

//     $('.bir').next().css({
//         'background-color': 'red'
//     });
//     $('.iki').prev().css({
//         'background-color': 'blue'
//     });
//     $('.iki').next().css({
//         'background-color': 'green'
//     });

// });

//Elemanları İndex sayısına göre seçme

// $(document).ready(function () {


//     $('.udemy li:eq(1)').css({
//         'background-color': 'red'
//     });



// });


// $(document).ready(function () {


//     //Birinci DİV etkilenir
//     // $('div').first().css({
//     //     'background-color': 'red'
//     // });

//     //Sonuncu Div etkilenir
//     // $('div').last().css({
//     //     'background-color': 'red'
//     // });


//     // Belirtilen Div etkilenmez
//     // $('div').not('.belirtisiz').css({
//     //     'background-color': 'red'
//     // });

//     // Belirtilen Div etkilenir
//     $('div').filter('.belirtisiz').css({
//         'background-color': 'red'
//     });



// });

//EACH SEÇİCİSİ

// $(function () {


//     $('ul li').each(function (index) {

//         alert(index + ".Eleman " + $(this).text());

//     });


// });


//Slice Seçicisi
// $(function () {
//     $('li').slice(2, 5).css({
//         'background-color': 'red'
//     });
// });


//is Seçicisi

$(function () {
    if ($('div').is('.udemy')) {
        $('b').text("Var");
    } else {
        $('b').text('yok');
    }
});