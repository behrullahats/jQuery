// Append Prepend methotları

// $(document).ready(function () {

//     // Düz yazı olarak ekleme
//     $('.php').append('ben php').prepend('Ben baştayım ');

//     //HTML olarak ekleme

//     $('.select').append('<option>html</option>', '<option>Jquery</option>');
// });

// AppendTo PrependTo methotları

// $(document).ready(function () {


//     $('button').click(function () {
//         $('a').appendTo($('p'));
//     });



// });

//Before after kullanımı

// $(document).ready(function () {
//     //Hepsinin bir altına eklemek için afker
//     // $('li').after('<li>wordpress</li>');

//     //En alta eklemek için after li:last
//     // $('li:last').after('<li>wordpress</li>');

//     //En üstün bir altına eklemek için after li:last
//     // $('li:first').after('<li>wordpress</li>');

//     //Hepsinin bir üstüne eklemek için before
//     // $('li').before('<li>wordpress</li>');

//     //En altın bir üstü eklemek için before li:last
//     //$('li:last').before('<li>wordpress</li>');

//     //En üstün bir üstüne eklemek için after li:last
//     //$('li:first').before('<li>wordpress</li>');



//     // $('.ust').click(function () {

//     //     $('li:first').before('<li>Wordpress</li>');


//     // });
//     // $('.alt').click(function () {

//     //     $('li:last').after('<li>Wordpress</li>');


//     // });

// });


// $(document).ready(function () {

//     $('#ekle').click(function () {

//         $('input:last').before("<input type='file' name='yukle[]'><br><br>");

//     });

// });

$(document).ready(function () {


    $('#ekle').click(function () {

        $('input:last').before("<input type='file' name='yukle[]'><br><br>");

    });

});