const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("./database/connection");

const productRoutes = require("./routes/products");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/compressed', express.static(path.join(__dirname, 'public', 'compressed')));

app.get("/", (req, res) => {
    res.send('Access not allowed!');
});

app.use("/api/v1", productRoutes);

app.listen(PORT, () => console.warn("Local Server Started at: "+PORT));