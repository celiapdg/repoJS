const APP = require("express")();
const PORT = 3000;

const CLC = require("cli-color");
const BODYPARSER = require("body-parser");

APP.use(BODYPARSER.json());

APP.listen(PORT, () => console.log(`App alive on http://localhost:${PORT}`));

APP.get("/", (request, response) => {
    const msg = request.method + ` localhost:${PORT}`;
    console.log(CLC.bgGreen('\t' + msg + ' ' + response.statusCode));
    response.send("Hello World!");
});

APP.get("/status", (request, response) => {
    response.status(404).json({
        status_code: 404,
        msg: "Not found",
    });
    const msg = request.method + `localhost:${PORT}` + request.url + ` ` + response.statusCode;
    console.log(CLC.bgGreen(`\t` + msg));
});

APP.post("/test", (request, response) => {
    if (!request.body.name) {
        return response.status(400).json({
            status: "error",
            error: "req body cannot be empty",
        });
    }

    response.status(200).json({
        status: "success",
        data: request.body
    });
});