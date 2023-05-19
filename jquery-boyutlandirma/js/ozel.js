// width - height : yükseklik ve genişlik ayarlanır

// $(function () {
//     $('div').width(750);
//     $('div').height(850);
// });

//offset : kordinatını verir.

// $(function () {
//     $('div').animate({
//         marginLeft: '+=30px'
//     })
//     $('button').click(function () {
//         alert("Sol Taraftan uzaklık : " + $('div').offset().left + "px" + '\n' + "Yukarı Taraftan Boşluk :" + $('div').offset().top + "px");
//     });
// });

//Position : İçeride bulunan nesnelerin dışarıdakilerine uzaklığını verir.

$(function () {
    var pozisyon = $('p').position();
    $('b').text("Soldan Uzaklık :" + pozisyon.left);
    $('b').append("yukarıdan Uzaklık :" + pozisyon.top);
});