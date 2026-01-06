const http = require("http");
const PORT = 3000;

// const server = http.createServer((request, response) => {
//     // request = письмо от бразуера (запрос)
//     // response - бланк для ответа (ответ на запрос от браузера)

//     console.log("Кто-то зашел к нам на сервер");
//     console.log(request.method, request.url);

//     // Формируем ответ
//     response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

//     // Пишем тело ответа
//     response.write("Привет из Node.js");

//     // Заканчиваем наш ответ, и отдаем его браузеру и клиенту.
//     // Иначе браузер будет висеть вечно
//     response.end();
// });

// http://localhost:3000/about
// /about

const server = http.createServer(async (request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

        if (request.url === '/') {
        // Главная страница нашего сайта
        response.statusCode = 200;
        response.write("Главная страница сайта");
        response.end();
    } else if (request.url === '/about') {
        // Страница о нас
        response.statusCode = 200;
        response.write("Это стартовая страница нашего файлообменника");
        response.end();
    } else if (request.url === '/stats') {
        const data = await fetch("https://gusic.xyz/");
        console.log(data);

        // response.setHeader("Content-Type", "application/json; charset=utf-8");

        // response.statusCode = 200;

        // response.write(JSON.stringify(jsonData));
        // response.end();       
    } else {
        response.statusCode = 404;
        response.write("Такой страницы не существет!");
        response.end();
    }
});

server.listen(PORT);
console.log("Сервер был успешно запущен");