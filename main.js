import express from "express";
import router from "./routes/movies.js";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

// middleware
app.use("/movies", router);

app.listen(PORT, () => console.log("server is running in port 8000"));
