const express = require("express");
const cors = require("cors");
const {mainRouter} = require("./Routes/index.js");
const app=express();
const port = process.env.PORT || 4000
app.use(cors());
app.use(express.json());
app.listen(port);
app.use("/api/v1",mainRouter);

