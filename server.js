const express = require("express");
const article = require("./routes/Article");
const config = require("./config/db")
const auth = require("./routes/Auth");
const excel = require("./routes/xls");
const jourF = require("./routes/jourF");
const mq2706 = require("./routes/mq2706jointure");
const controle = require("./routes/controle")

const app = express();
app.use(express.json());


app.use("/api/Auth", auth);
app.use("/api/article", article);
app.use("/api", excel);
app.use("/api/jourF", jourF);
app.use("/api", mq2706);
app.use("/api/",controle)

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
