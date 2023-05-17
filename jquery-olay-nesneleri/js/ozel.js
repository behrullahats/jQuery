//olay Nesneleri
//Event Current Target : İşaret ettiğimiz nesnelerin isimlerini alır.

// $(function () {
//     $('b').html("Merhaba");
//     $('b').click(function () {
//         alert(event.currentTarget.nodeName);
//     });
//     $('p').click(function () {
//         alert(event.currentTarget.nodeNme);
//     });

// });

//event-related-target : bir olay olmadan öne hangi nesnenin üzerinden geçtiyse onun bilgisini veren method

// $(function () {
//     $('li').mouseover(function (event) {
//         $('b').text(event.relatedTarget.nodeName);
//     });
// });

//Event Target : Olayın hangi nesne üzerinden gerçekleştiğini yazar.

// $(function () {
//     $('body').click(function (event) {
//         alert(event.target.nodeName);
//     });
// });


//PAGE X PAGE Y : farenin x ve y kordinatlarını,pozisyon bilgilerini verir.

// $(function () {
//     $(document).mousemove(function (y) {
//         $('b').text('X Kordinatı : ' + y.pageX + ' Y Kordinatı : ' + y.pageY);
//     });
// });

// $(function () {
//     $('div').mousemove(function (k) {
//         $('b').text('X Kordinatı : ' + k.pageX + ' Y Kordinatı : ' + k.pageY);
//     });

//     $('body').mouseover(function (event) {
//         // alert(event.target.nodeName);
//         var bilgi = event.target.nodeName;
//         if (bilgi == 'BODY') {
//             alert('Çizgi Dışına Çıktınız yandınız');
//         }


//     });
// });


//ALT KEY : klavyeden ALT tuşuna basıldığını temin eder.

// $(function () {
//     $(document).keydown(function (event) {
//         if (event.altKey) {
//             $('b').text("Alta basıldı");
//         }
//     });
// });


//Shift KEY : klavyeden shift tuşuna basıldığını temin eder.

// $(function () {
//     $(document).keydown(function (event) {
//         if (event.shiftKey) {
//             $('b').text("Shifte basıldı");
//         }
//     });
// });


//CTRL KEY : klavyeden CTRL tuşuna basıldığını temin eder.

// $(function () {
//     $(document).keydown(function (event) {
//         if (event.ctrlKey) {
//             $('b').text('CTRL TUŞUNA BASILDI');
//         }
//         if (event.altKey) {
//             $('b').text('Alt TUŞUNA BASILDI');
//         }
//         if (event.shiftKey) {
//             $('b').text('Shift TUŞUNA BASILDI');
//         }
//     });
// });


//event which
$(function () {
    $('#keyword').on('keydown', function (event) {
        // $('b').text('Basılan tuşun ASCII değeri : ' + event.which);

        var a = event.which;
        if (a == 52) {
            $('b').text('Dolar İşareti Yapıldı');
        }



    });

});