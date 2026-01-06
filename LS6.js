const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
    

    if (request.url === "/") {
        response.setHeader("Content-Type", "text/html; charset=utf-8")
        response.end(`
            <h1>Олег</h1>
            <a href="/contact">Контакты</a>
            `);
    } else if (request.url === "/contact") {
        response.setHeader("Content-Type", "text/html; charset=utf-8")
        response.end(`
            <p>Email: <b>https://github.com/anantashanti/Lesson6</b></p>
            <a href="/">На главную</a>
            `);
    } else if (request.url === "/api/info") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json; charset=utf-8");

        const data = {
            serverName: "MyPC",
            version: "1.0.0",
            status: "working"
        };

        response.end(JSON.stringify(data));
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html; charset=utf-8")
        response.end(`
            <h1>404</h1>
            <p>Страница не найдена</p>

            <img
              src="https://i.imgur.com/qIufhof.png"
              width="300"
              >

              <br><br>         
            <a href="/">На главную</a>
            `);
    }
});

server.listen(PORT);
console.log("Сервер был успешно запущен");