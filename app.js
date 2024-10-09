const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/version", (req, res) => {
  res.json({ version: "v0.0.1" });
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
