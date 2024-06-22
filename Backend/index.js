const express = require("express");
const cors = require("cors");
const {mainRouter} = require("./Routes/index.js");
const app=express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 3000);
app.use("/api/v1",mainRouter);

