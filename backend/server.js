const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/compressed' ,express.static('public/compressed'));

app.get("/", (req, res) => {
    res.send('Access not allowed!');
});

app.listen(PORT, () => console.warn("Server Started at: "+PORT));