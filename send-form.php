<?php
    $to = 'mari-devel@ya.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Форма с сайта'; //Загoловок сообщения
    $message = '
            
            Имя: '.$_POST['name'].'
            Телефон: '.$_POST['email'].'
            Комментарий: '.$_POST['comment'].'                    
                
            '; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers  = "From: Отправитель <info@mari-dev.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

?>