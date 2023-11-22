import React from "react";
import "../WeatherReport/reportWeathers.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HumidityIcon from "../Assrets/humidity.png";
import feelsLikeIcon from "../Assrets/feelsLike.png";
import { Divider, IconButton, Stack, Typography, Box } from "@mui/material";

function WeatherReportDetails({
  weatherData,
  setWeatherData,
  setInputText,
  setErrorMessage,
}) {
  const { icon, country, temperature, city, description, feelsLike, humidity } =
    weatherData;
  const backToHome = () => {
    setWeatherData("");
    setInputText("");
    setErrorMessage("");
  };
  return (
    <Box className="report-weather-card">
      <Card className="report-card-body">
        <Stack
          className="report-card-header"
          spacing={1}
          direction="row"
          justifyContent="start"
        >
          <IconButton aria-label="settings" onClick={backToHome}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <CardHeader title="Weather Report" style={{ paddingLeft: "0px" }} />
        </Stack>
        <Divider />
        <CardContent>
          <Stack
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <img src={icon} />
            <Typography variant="h4">{temperature}°C</Typography>
            <Typography variant="h6">{description}</Typography>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <LocationOnIcon />
              <Typography variant="h6">
                {city}, {country}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider />
        <Box className="feelslike-humidity-box">
          <Box className="feel-main-box">
            <img src={feelsLikeIcon} width="60" height="60" alt="geels like" />
            <Box className="feelslike-box">
              <Typography variant="h6">{feelsLike} °C</Typography>
              <Typography variant="h6">Feels Like</Typography>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem variant="fullWidth" />
          <Box className="humidity-main-box">
            <img src={HumidityIcon} width="60" height="55" alt="humidity" />
            <Box className="humidity-box">
              <Typography variant="h6">{humidity} %</Typography>
              <Typography variant="h6">Humidity</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default WeatherReportDetails;
