import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef, useEffect } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6fbe330cce2feddef27ad6a08908e657"; // Replace with your API key

  useEffect(() => {
    // Auto-focus input on page load
    inputRef.current?.focus();
  }, []);

  const getWeatherInfo = async () => {
  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    if (Number(jsonResponse.cod) !== 200) {
      throw new Error(jsonResponse.message);
    }

    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  } catch (err) {
    throw err;
  }
};


  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    setLoading(true);

    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <TextField
        inputRef={inputRef}
        label="Enter City Name"
        variant="outlined"
        value={city}
        onChange={handleChange}
        required
        sx={{ width: "300px" }}
      />

      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        startIcon={!loading && <SearchIcon />}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
      </Button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ City not found! Please try again.
        </p>
      )}
    </form>
  );
}
