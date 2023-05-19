//Post ile veri gönderme işlemi

// $('#gonder').click(function () {
//     $.ajax({
//         type: 'POST',
//         url: 'islem.php',
//         data: $('#jquery-ajax').serialize(),
//         success: function (cevap) {
//             $('b').text(cevap);
//         }
//     });
// });

//get

// $('#gonder').click(function () {
//     $.ajax({
//         type: "post",
//         url: 'islem.php',
//         data: $('#jquery-ajax').serialize(),
//         success: function (cevap) {
//             $('b').text(cevap);
//         }
//     });
// });


//LOAD
$('#gonder').click(function () {
    $.ajax({
        type: "post",
        url: 'islem.php',
        data: $('#jquery-ajax').serialize(),
        success: function (cevap) {
            $('b').text(cevap);
            if (cevap) {
                $('#ad').val("");
                $('#soyad').val("");
            }
        }
    });
});