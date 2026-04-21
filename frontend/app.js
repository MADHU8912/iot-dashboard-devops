const API_URL = "http://localhost:5000/api/sensors";

async function loadData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("device").textContent = data.device;
    document.getElementById("temperature").textContent = data.temperature + " °C";
    document.getElementById("humidity").textContent = data.humidity + " %";
    document.getElementById("pressure").textContent = data.pressure + " hPa";
    document.getElementById("status").textContent = data.status;
    document.getElementById("updatedAt").textContent = data.updatedAt;
  } catch (err) {
    console.error(err);
  }
}

loadData();