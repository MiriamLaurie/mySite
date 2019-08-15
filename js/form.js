$(document).ready(function(){
    $("#form").submit(function(e) {
        e.preventDefault() //устанавливаем событие отправки для формы с id=form
            let form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: 'POST', //Метод отправки
            url: 'send-form.php', //путь до php фаила отправителя
            data: form_data,
                    success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    alert('Спасибо! Скоро мы с Вами свяжемся.'); // пoкaжeм eё тeкст
                    }
            });
    });
});   

