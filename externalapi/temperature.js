import express from "express";

const router = express.Router();

const fetchTemperatureData = async () => {
  const url = "https://api.opensensemap.org/boxes/{boxId}/data/{sensorId}";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Filter out relevant temperature data (assuming the API returns an array)
    const temperatures = data.map((entry) => parseFloat(entry.value));

    return temperatures;
  } catch (error) {
    console.error("Error fetching temperature data:", error);
    throw new Error("Failed to fetch temperature data");
  }
};

const calculateAverage = (temperatureData) => {
  if (!temperatureData || temperatureData.length === 0) return null;

  const sum = temperatureData.reduce((total, value) => total + value, 0);
  return sum / temperatureData.length;
};

router.get("/temperature", async (req, res) => {
  try {
    const temperatureData = await fetchTemperatureData();
    const averageTemperature = calculateAverage(temperatureData);

    if (averageTemperature !== null) {
      res.json({ averageTemperature });
    } else {
      res.status(404).json({ message: "No temperature data available" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
