 // эта функция сработает при нажатии на кнопку

  function sendJSON() {

    //обращаемся к элементам на странице по их именам

    let tournament = document.querySelector('#tournament');
    let division = document.querySelector('#division');
    let tour = document.querySelector('#tour');
    let date = document.querySelector('#date');
    let time = document.querySelector('#time');
    let opponent = document.querySelector('#opponent');
    let place = document.querySelector('#place');

    let result = document.querySelector('.result'); // ответ от сервера
    let xhr = new XMLHttpRequest(); // создаём новый экземпляр запроса XHR
    let url = "https://iamdef.ru/json/savecalendar.php"; // адрес, куда мы отправим нашу JSON-строку

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

function deleteNull(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i+=2) {
        newArr.push(arr[i]);
    }

    return newArr;
} 

function getJSON() {
    var requestURL = "https://iamdef.ru/json/data.json"
    var request = new XMLHttpRequest();
    var getResult = document.getElementById('getResult');

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var dirtyMatchDay = this.response; // сейчас это массив с массивами, внутри которых объект дня матча, через один пустой массив
        var sheduleMatches = deleteNull(dirtyMatchDay); // удаляем пустые массивы, получаем массив объектов дня матча

        // сюда функции для объекта
    }

}
