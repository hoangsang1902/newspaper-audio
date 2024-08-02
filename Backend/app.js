const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

const mongoUrl =
  "mongodb+srv://Danh:admin@cluster0.c3dlcxk.mongodb.net/PaperApp";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

app.post("/register", async (req, res) => {
  const data = req.body;
});

app.use("/api/librarys", routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
