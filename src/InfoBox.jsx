import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { Stack, Chip } from "@mui/material";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEX0DCeEeWnkakFc1jQxI0oujXoMcU-AD38SP3g08R0=";

  const getIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon sx={{ color: "#1976d2" }} />;
    if (info.temp > 15) return <SunnyIcon sx={{ color: "#e5b53bff" }} />;
    return <AcUnitIcon sx={{ color: "#03a9f4" }} />;
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "20px",
        boxShadow: 5,
        mt: 3,
      }}
    >
      <CardMedia
        sx={{ height: 180 }}
        image={
          info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
        }
      />
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {info.city}
          </Typography>
          {getIcon()}
        </Stack>

        <Typography variant="h4" sx={{ mt: 1 }}>
          {info.temp}°C
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          The weather can be described as{" "}
          <b style={{ textTransform: "capitalize" }}>{info.weather}</b> and feels
          like {info.feelsLike}°C.
        </Typography>

        {/* Chips for extra info */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ mt: 2, gap: "10px" }}
        >
          <Chip
            icon={<DeviceThermostatIcon />}
            label={`Min: ${info.tempMin}°C`}
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<DeviceThermostatIcon />}
            label={`Max: ${info.tempMax}°C`}
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<WaterDropIcon />}
            label={`Humidity: ${info.humidity}%`}
            color="info"
            variant="outlined"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
