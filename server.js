const express = require("express");
const app = express();
const cors = require("cors");
const questionsRoutes = require("./routes/questions")
const PORT = 8080;

app.use(express.static("public"));

app.use(cors());



app.use("/",questionsRoutes);

app.listen(PORT,() =>{
    console.log(`server listening on ${PORT}`)
})