import express from "express";
import temperatureRouter from "./externalapi/temperature.js";
const app = express();
const port = process.env.PORT || 3000;

app.get("/version", (req, res) => {
  res.json({ version: "v0.0.1" });
});
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});
app.get("", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/api", temperatureRouter);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

export default app;
