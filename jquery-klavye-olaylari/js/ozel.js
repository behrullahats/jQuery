// $(function () {
//     $('input').keydown(function () {

//         alert("Herhangi bir tuşa Basıldı");


//     });
// });

//Keyup Kullanımı

// $(function () {
//     $('#ad').keypress(function (event) {
//         $('div').animate({
//             marginLeft: "+=10px"
//         });
//     });
//     $('#ad').keyup(function (event) {
//         alert("tuş bırakıldı");
//     });
// });

$(function () {
    $('body').keypress(function (event) {

        var a = event.which;

        $('div').text("basılan tuş : " + a);

        if (a == 119) {
            $('div').animate({
                marginTop: "-=10px"
            });
        } else if (a == 115) {
            $('div').animate({
                marginTop: "+=10px"
            });
        } else if (a == 100) {
            $('div').animate({
                marginLeft: "+=10px"
            });
        } else if (a == 97) {
            $('div').animate({
                marginLeft: "-=10px"
            });
        }
    });
});