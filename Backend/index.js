const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.listen(3000);
const {mainRouter}=require("./Routes/index.js");
app.use("/api/v1",mainRouter);

