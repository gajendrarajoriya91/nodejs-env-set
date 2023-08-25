require("dotenv").config();
const express = require("express");
const statusMonitor = require("express-status-monitor")();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(statusMonitor);

app.get("/tests", (req, res) => {
  return res.status(200).json({ msg: "successful!" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
