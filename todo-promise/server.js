"use strict";

var connect = require("connect"),
    serveStatic = require("serve-static"),
    app = connect();

app.use(serveStatic("app/"));
app.listen(5000);