export default async function handler(req, res) {
    const { city } = req.query;
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Gagal mengambil data cuaca");
  
      const data = await response.json();
      res.status(200).json({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }