//EFFECT ÖZELLİKLERİ

//Show

// $(function () {
//     $('button').click(function () {

//         //Sade kullanım
//         // $(".div").show();

//         //Yavaşlatarak
//         // $('.div').show(2000);

//         // işlem gerçekleştikden sonra
//         $('.div').show(2000, function () {
//             $('b').text("Show işlemi uygulandı");
//         });
//     });
// });



//Hide
// $(function () {
//     $('button').click(function () {
//         // $('.div').hide();
//         $('.div').hide();
//     });
// });

//Toggle

// $(function () {
//     $('button').click(function () {
//         $('.div').toggle(500, function () {
//             var sonuc = $('.div').css('display');

//             if (sonuc == 'block') {
//                 $('b').text("Açıldı");
//             } else if (sonuc == 'none') {
//                 $('b').text("Kapandı");
//             }
//         });
//     });
// });


//ödev
// $(function () {
//     $('.resim').click(function () {
//         $('.resim').hide();

//         var resim = $('.resim').css('display');

//         if (resim == 'none') {
//             $('b').text("Resim Kayboldu");
//         }
//     });
// });



//Bekletme manipule etme
// $(function () {
//     $('button').click(function () {
//         $('.div').delay(200).toggle(500);
//     });
// });

//Slide down : belirli şekilde açmaya yarar tabi display özelliği none olmak zorunda

// $(function () {
//     $('button').click(function () {
//         $('.div').slideDown(200);
//     });
// });




//Slide up : belirli şekilde kapama yarar tabi display özelliği none olmak zorunda

// $(function () {
//     $('button').click(function () {
//         $('.div').slideUp(200);
//     });
// });


//Slide toggle : Açma kapamaya yarar
// $(function () {
//     $('button').click(function () {
//         $('.div').slideToggle(2000);
//     });
// });

//Fade In
// $(function () {
//     $('button').click(function () {
//         $('.div').fadeIn(450);
//     });
// });

// //Fade Out
// $(function () {
//     $('button').click(function () {
//         $('.div').fadeOut(450);
//     });
// });

//Fade To
// $(function () {
//     $('button').click(function () {
//         $('.div').fadeTo('slow', 0.10);
//     });
// });


//ÖDev

// $(function () {
//     $('.bir').fadeTo('slow', 0.50);
//     $('.iki').fadeTo('slow', 0.50);
//     $('.uc').fadeTo('slow', 0.50);
//     $('.dort').fadeTo('slow', 0.50);


//     $('#btn1').click(function () {
//         $('.bir').fadeTo('slow', 0.10);
//         alert("Yanlış Seçim");
//     });
//     $('#btn2').click(function () {
//         $('.iki').fadeTo('slow', 1);
//         alert("Doğru  Seçim");
//     });
//     $('#btn3').click(function () {
//         $('.uc').fadeTo('slow', 0.10);
//         alert("Yanlış Seçim");
//     });
//     $('#btn4').click(function () {
//         $('.dort').fadeTo('slow', 0.10);
//         alert("Yanlış Seçim");
//     });

// });

// $(function () {
//     $('button').click(function () {
//         $('.div').fadeToggle(1000);
//     });
// })

//Animated

// $(function () {
//     $('.yukari').click(function () {
//         $('.div').animate({
//             marginTop: '-=20px'
//         });
//     });
//     $('.asagi').click(function () {
//         $('.div').animate({
//             marginTop: '+=20px'
//         });
//     });
//     $('.sag').click(function () {
//         $('.div').animate({
//             marginLeft: '+=20px'
//         });
//     });
//     $('.sol').click(function () {
//         $('.div').animate({
//             marginLeft: '-=20px'
//         });
//     });
// });

//Queue

$(function () {
    $('button').click(function () {
        $('.div').animate({
            marginLeft: '50px'
        });
        $('.div').animate({
            marginTop: '120px'
        });
        $('.div').animate({
            marginLeft: '130px'
        });
        $('.div').animate({
            marginTop: '+=120px'
        });
        $('.div').animate({
            marginLeft: '+=130px'
        });
        $('.div').animate({
            marginTop: '+=120px'
        });
        $('.div').animate({
            marginLeft: '+=650px'
        });
    });
});