<?php
    $to = 'mari-devel@ya.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Форма с сайта'; //Загoловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['email'].'</p> 
                    <p>Комментарий: '.$_POST['comment'].'</p>                        
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers  = "From: Отправитель <info@mari-dev.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    if (mail("example@mail.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
{ 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}

?>