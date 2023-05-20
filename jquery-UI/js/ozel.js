//jQuery UI

//Acordion : Aşağı doğru Kaydırarak gerekli bilgilere ulaşmak için kullanılır.

// $(function () {
//     $('#accordion').accordion();
// });

//Autocomplete : Aramalar daha dinamik olması için kullanılır.

// source : Aranacak değerler buraya getirilir.
// minLength : Kaç karakterden sonra arama yapılsın.

// $(function () {
//     listele = [
//         'seyit', 'ateş', 'songül', 'amine', 'yusuf', 'ali', 'deli'
//     ]
//     $('#aranan').autocomplete({
//         source: listele,
//         minLength: 2
//     });
// });

//DataPicker : Takvim Seçme Aracıdır.
// - ShowButtonPanel : Alt Tarafta Panel Açılır.
// - ChangeMonth : Ay Seçenekleri.
// - ChangeYear : Yıl Seçenekleri.
// - NumberOfmonth: Birden Fazla Ay Gösterebilirsiniz.
// - ShowWeek : Haftaları Gösterir.
// -- Eğer Alt formatta seçmiş olduğunuz tarihi göstermek istiyor iseniz;
// --- AltField : '#ayrinti' : Ay seçtiğimiz nesnenin hemen altına input açarak bunu gerçekleştirebilirsiniz. Ancak Format değerinide yazmalısınız;
// --- AltFormat : "d MM, yy" : Dilediğiniz formatı yazarak altta belirttiğiniz inputta yazar;

// $(function () {
//     $('#takvim').datepicker({
//         showButtonPanel: true,
//         changeMonth: true,
//         changeYear: true,
//         numberOfMonths: 1,
//         showWeek: true,
//         altField: '#ayrinti',
//         altFormat: 'd MM,yy'
//     });
// });

//Dialog : Ekranda Modal Box Formatında Pencere açar.

// $(function () {
//     $('button').click(function () {
//         $('#dialog').dialog();
//     });

// });

//Progressbar : Yüzdelik göstermek için kullanılır.

// $(function () {
//     $('#progressbar').progressbar({
//         value: 50
//     });
//     $('#progressbar').css({
//         'color': 'blue'
//     });
// });

//TABS : Metinleri Çok uzatmamak için kullanılır.

// $(function () {
//     $('#tabs').tabs({
//         event: "mouseover"
//     });
// });

//Draggable : Nesneye Hareket Özelliği Kazandırılır.
// Drop : Nesne üzerine geldiğinde gerçekleşecek olaylar.
// (revert: 'invalid') : Herhangi bir nesneye ulaşmadan yerine geçmez.
// $(function () {
//     $('#draggable').droppable({
//             accept: "#droppable",
//             drop: function () {
//                 alert("Nesne Geldi");
//             }
//         }

//     );
//     $('#droppable').draggable({
//         revert: 'invalid'
//     });
//     $('#oynat2').draggable();

// });


//Resizable : Nesneleri boyutlandırmak için kullanılır.

// $(function () {
//     $('#kare').resizable();
// });

//SELECTTABLE : seçtiğimiz elemanları gösterir.

$(function () {
    $('#kare').sortable();
});