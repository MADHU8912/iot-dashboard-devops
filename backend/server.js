const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "IoT backend running",
    status: "success"
  });
});

app.get("/api/sensors", (req, res) => {
  res.json({
    device: "ESP32 Demo Device",
    temperature: 27,
    humidity: 61,
    pressure: 1008,
    light: "ON",
    updatedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});