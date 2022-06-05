<?php
// на какие данные рассчитан этот скрипт
header("Content-Type: application/json");
// разбираем JSON-строку на составляющие встроенной командой
$Matchdaydata = json_decode(file_get_contents("php://input"));
// отправляем в ответ строку с подтверждением
echo "Сервер получил следующие данные:
    Турнир — $Matchdaydata->tournament,
    Дивизион — $Matchdaydata->division,
    Тур - $Matchdaydata->tour,
    Дата - $Matchdaydata->date,
    Время - $Matchdaydata->time,
    Соперник - $Matchdaydata->opponent,
    Место - $Matchdaydata->place";