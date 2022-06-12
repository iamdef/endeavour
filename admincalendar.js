 // эта функция сработает при нажатии на кнопку

  function sendJSONCalendar() {

    //обращаемся к элементам на странице по их именам

    let tournament = document.querySelector('#tournament');
    let division = document.querySelector('#division');
    let tour = document.querySelector('#tour');
    let date = document.querySelector('#date-calendar');
    let time = document.querySelector('#time-calendar');
    let opponent = document.querySelector('#opponent-calendar');
    let place = document.querySelector('#place');

    let result = document.querySelector('.result'); // ответ от сервера
    let xhr = new XMLHttpRequest(); // создаём новый экземпляр запроса XHR
    let url = "https://iamdef.ru/json/calendar/savecalendar.php"; // адрес, куда мы отправим нашу JSON-строку

    xhr.open("POST", url, true); // открываем соединение
    xhr.setRequestHeader("Content-Type", "application/json"); // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON

    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь

    xhr.onreadystatechange = function () {

      // если запрос принят и сервер ответил, что всё в порядке

      if (xhr.readyState === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText; // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
      }
    };

    // преобразуем наши данные JSON в строку

    var Matchdaydata = JSON.stringify(
        {
        "tournament": tournament.value,
        "division": division.value,
        "tour": tour.value,
        "date": date.value,
        "time": time.value,
        "opponent": opponent.value,
        "place": place.value
        });

    xhr.send(Matchdaydata); // когда всё готово, отправляем JSON на сервер
  }

  function sendJSONResults() {

    //обращаемся к элементам на странице по их именам
    let tournament = document.querySelector('#tournament-results');
    let division = document.querySelector('#division-results');
    let tour = document.querySelector('#tour-results');
    let date = document.querySelector('#date-results');
    let time = document.querySelector('#time-results');
    let opponent = document.querySelector('#opponent-results');
    let youtube = document.querySelector('#youtube');
    let score = document.querySelector('#score');
    let resultat = document.querySelector('#resultat');

    let result = document.querySelector('.result-results'); // ответ от сервера
    let xhr = new XMLHttpRequest(); // создаём новый экземпляр запроса XHR
    let url = "https://iamdef.ru/json/results/saveresults.php"; // адрес, куда мы отправим нашу JSON-строку

    xhr.open("POST", url, true); // открываем соединение
    xhr.setRequestHeader("Content-Type", "application/json"); // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON

    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь

    xhr.onreadystatechange = function () {

      // если запрос принят и сервер ответил, что всё в порядке

      if (xhr.readyState === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText; // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
      }
    };

    // преобразуем наши данные JSON в строку

    var resultsData = JSON.stringify(
        {
        "tournament": tournament.value,
        "division": division.value,
        "tour": tour.value,
        "date": date.value,
        "time": time.value,
        "opponent": opponent.value,
        "score": score.value,
        "youtube": youtube.value,
        "resultat": resultat.value
        });

    xhr.send(resultsData); // когда всё готово, отправляем JSON на сервер
  }