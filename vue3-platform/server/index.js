const express = require("express");
const app = express();
const router = require("./router.js");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api", router);

app.listen(3000, () =>{
    console.log("服务器运行到 3000 端口上");
})

