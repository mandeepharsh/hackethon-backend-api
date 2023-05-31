const express = require("express");
const app = express();
const cors = require("cors");
const questionsRoutes = require("./routes/questions");
const peers = require("./routes/peers")
const PORT = 8080;

app.use(express.static("public"));

app.use(cors());



app.use("/",questionsRoutes);

app.use("/",peers)

app.listen(PORT,() =>{
    console.log(`server listening on ${PORT}`)
})