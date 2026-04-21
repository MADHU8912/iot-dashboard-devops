const API_URL = "https://iot-dashboard.onrender.com/api/sensors";

async function loadSensors() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("device").textContent = data.device;
    document.getElementById("temperature").textContent = data.temperature + " °C";
    document.getElementById("humidity").textContent = data.humidity + " %";
    document.getElementById("pressure").textContent = data.pressure + " hPa";
    document.getElementById("light").textContent = data.light;
    document.getElementById("updatedAt").textContent = data.updatedAt;
  } catch (error) {
    console.error("Error loading sensor data:", error);
  }
}

loadSensors();
