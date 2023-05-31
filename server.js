const express = require("express");
const app = express();
const cors = require("cors");
const questionsRoutes = require("./routes/questions");
const peers = require("./routes/peers");
const message = require("./routes/comment");
const PORT = 8080;

app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.use("/", questionsRoutes);

app.use("/", peers);

app.use("/", message);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
