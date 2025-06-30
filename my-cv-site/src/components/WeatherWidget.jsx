import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=3ce7a80550d9be62667598a446a402db&units=metric&lang=fr'
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur météo :', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Chargement de la météo...</p>;
  if (!weather) return <p>Impossible de charger la météo.</p>;

  return (
    <div className="weather-widget">
      <h3> 🌤️ Météo à {weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p> 🌡️ {weather.main.temp} °C</p>
      <p> 💨 Vent : {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherWidget;
