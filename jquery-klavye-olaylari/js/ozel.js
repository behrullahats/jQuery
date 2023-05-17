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

        if (a == 87) {
            $('div').animate({
                marginTop: "-=1px"
            });
        } else if (a == 83) {
            $('div').animate({
                marginTop: "+=1px"
            });
        } else if (a == 68) {
            $('div').animate({
                marginLeft: "+=1px"
            });
        } else if (a == 65) {
            $('div').animate({
                marginLeft: "-=1px"
            });
        }
    });
});