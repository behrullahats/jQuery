//ADD CLASS
// $().ready(function () {
//     $('p').addClass('ozel');
// });

// HAS CLASS

// $().ready(function () {

//     var a = $('p').hasClass('ozel');

//     if (a == true) {
//         $('b').text("var");
//     } else {
//         $('b').text("yok");
//     }

// });

// Method Zincirlemesi
// $(function () {
//     $('div').height(700).fadeOut(2000).fadeIn(2000);
// });

//Remove Class

// $(function () {
//     $('div').removeClass('renk');
// });

//  Toggle Class
// $().ready(function () {

//     $('button').click(function () {
//         $('p').toggleClass('renk');
//         $('h2').toggleClass('ustyazi');
//     });



// });


//Ödev 

$().ready(function () {
    $('button').click(function () {
        var bulma = $('div').hasClass('lorem');

        if (bulma == true) {
            alert('evet var');
        } else {
            alert("yok");
        }
    });
});