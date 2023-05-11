<!DOCTYPE html>
<html lang="TR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>AppendTo PrependTo </title>

</head>



<body>


    <?php
    echo "<pre>";
    print_r($_POST['yukle']);
    echo "</pre>";


    ?>

    <h2>Dosya Ekleme</h2>

    <form action="" method="post">
        <input type="file" name="yukle[]">
        <button type="submit">Yükle</button>
    </form>
    <br><br>
    <button id="ekle">Ekle</button>


    <script type="text/javascript" src="js/jquery-3.6.4.min.js"></script>
    <script type="text/javascript" src="js/ozel.js"></script>

</body>

</html>