//Click Olayı : Herhangi bir nesneye tıklandığında olacak işlemler.

// $(function () {
//     $('button').click(function () {

//         $('b').text("Butona Tıklandı");

//     });
// });

//DBCLİCK : Herhangi bir nesneye çift tıklandığında oluşabilecek olayları bizlere yansıtır.


// $(function () {
//     $('button').dblclick(function () {

//         $('b').text("Butona Çift Tıklandı");

//     });
// });

//Hover : herhangi bir nesnenin üzerine gelince yapılabilecek işlemler ve bu fonksiyon iki parametre almaktadır.


// $(function () {

//     $('button').hover(i, d);

//     function i() {
//         $('b').text('Bana Uğradığın için Teşekkür ederimmmm');

//     }

//     function d() {
//         $('b').text('Beni Lütfen Bırakma');
//     }

// });

//Mause Down : Hangi Tuşa Basıldığını görebilmemizi sağlar

// $(function () {

//     $('button').mousedown(function (event) {


//         $('b').text(event.which); // Sayı belirtir.

//         switch (event.which) {
//             case 1:
//                 alert("Sol Tuşa Basıldı");
//                 break;
//             case 2:
//                 alert("Orta Tuşa Basıldı");
//                 break;
//             case 3:
//                 alert("Sağ Tuşa Basıldı");

//                 break;
//         }

//     });


// });


//Mause Down :Tuşu bıraktığımız zaman işleme girecek işlemleri yapmamıza yarar.
//Mauseout : Bir nesnenin üzerine geldiği zaman ve bir şey yapmadan gittiği zaman kullanılır.
//Mause Enter : nesnenin üzerine geldiği zaman tetikler

// $(function () {
//     $('button').mouseup(function () {
//         $('b').text("Maus tıklama bırakıldı...");
//     });
//     $('button').mousedown(function () {
//         $('b').text("Maus Basıldı");
//     });
//     $('button').mouseout(function () {
//         $('b').text("Fare geldi ancak peynirini yemeden gitti");
//     });
//     $('button').mouseenter(function () {
//         $('b').text("Fare geldi :)");
//     });
// });

// Mousemove : Nesnenin üzerindeyken çalışır.

// $(function () {
//     $('button').mousemove(function (e) {
//         $('b').text(e.pageX + " " + e.pageY);
//     });
// });


//maus ile kaçanı kovalamak

// $(function () {
//     $('button').hover(i);

//     function i() {
//         $('button').animate({
//             marginLeft: "+=120px"
//         });
//     }
//     $('button').click(function () {
//         alert("Beni Yakaladın");
//     });
// });

$(function () {
    $('#ad').blur(function () {
        var a = $('#ad').val();
        if (a == "seyit") {
            $('b').text("Doğru Yazdın Aferim Devam Et");

        } else {
            $('b').text("Umarım Doğru Yazmışsındır");
        }
    });
});