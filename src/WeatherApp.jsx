import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => setWeatherInfo(newInfo);

  // Dynamic background based on temperature
  const getBgColor = (temp) => {
    if (temp >= 30) return "#ff8c42"; // Hot
    if (temp >= 20) return "#ffd166"; // Warm
    if (temp >= 10) return "#06d6a0"; // Mild
    return "#118ab2"; // Cold
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      getBgColor(weatherInfo.temp)
    );
  }, [weatherInfo.temp]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-color)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "background-color 0.5s ease",
        p: 3,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Weather App ☁️
        </Typography>

        <SearchBox updateInfo={updateInfo} />

        {/* Center InfoBox */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <InfoBox info={weatherInfo} />
        </Box>
      </Container>
    </Box>
  );
}
