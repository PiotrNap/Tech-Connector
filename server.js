const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(PORT, () => console.log("Listening on port 5000"));
