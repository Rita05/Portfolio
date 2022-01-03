const express = require("express");
const app = express();

app.set('port', 8081);

app.use(express.static('./static'))

app.listen(8081)

