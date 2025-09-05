import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEX0DCeEeWnkakFc1jQxI0oujXoMcU-AD38SP3g08R0=";
  

  return (
    <>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
              info.humidity > 80 
              ? <ThunderstormIcon/> : (info.temp > 15) ? <SunnyIcon/> : <AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component="span">
           <p>Temperature - {info.temp}&deg;C</p>
           <p>Humidity - {info.humidity}</p>
           <p>Min temp - {info.tempMin}&deg;C </p>
           <p>Max temp - {info.tempMax}&deg;C</p>
           <p>The weather can be described as <b>{info.weather} </b> and feels like - {info.feelsLike}&deg;C</p>
          </Typography>
         

        </CardContent>
        
      </Card>
    </>
  );
}
