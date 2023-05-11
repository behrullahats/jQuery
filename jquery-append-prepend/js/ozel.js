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

// $(document).ready(function () {


//     $('#ekle').click(function () {

//         $('input:last').before("<input type='file' name='yukle[]'><br><br>");

//     });

// });


//Clone Kullanımı

// $(document).ready(function () {
//     $('div').clone().insertAfter('p');
// });

//text kullanımı

// $(document).ready(function () {

//     $('div').text("Div elemanına eklendi");
//     $('p').text('p elemanına eklendi');
//     $('b').text('b elemanına eklendi');
//     $('a').text('a elemanına eklendi');

// });

//replace kullanımı

// $(document).ready(function () {

//     $('button').click(function () {
//         $('p').replaceWith('<p>Değiştirildim');
//     });

// });

//Empty Kullanımı

// $(document).ready(function () {
//     $('button').click(function () {

//         $('p').empty();
//     });
// });

//remove kullanımı
// $(document).ready(function () {
//     $('button').click(function () {

//         $('p').remove();
//     });
// });

//elemanların verilerine erişme

// $(function () {
//     $('a').text("Hepsi erbaa web sitesi").attr('href', 'https://www.hepsierbaa.com').attr('style', 'color:blue');
// });

//Sitillere erişme

// $(document).ready(function () {
//     $('button').click(function () {
//         $('div').css({
//             'background-color': 'blue'
//         });
//     });
// });

//html kullanımı

// $().ready(function () {

//     //içeriğini alır
//     // alert($('p').html());

//     //içeriğini değiştirmek için

//     // $('p').html('merhaba naber');

//     //başka bir içeriğe yollama


// });

//value

$().ready(function () {
    $('button').click(function () {
        var liste = $('select').val();
        if (liste == 'a') {
            alert("a seçildi");
        } else if (liste == 'b') {
            alert("b seçildi");
        } else if (liste == 'c') {
            alert("c seçildi");
        } else if (liste == 'd') {
            alert("d seçildi");
        }

    });
});