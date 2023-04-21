import React from "react";
import "../WeatherReport/reportWeathers.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Divider, IconButton, Stack, Typography } from "@mui/material";

function WeatherReportDetails({
  weatherData,
  setWeatherData,
  setInputText,
  setErrorMessage,
}) {
  const { icon, country, temperature, city, description } = weatherData;
  const backToHome = () => {
    setWeatherData("");
    setInputText("");
    setErrorMessage("");
  };
  return (
    <div className="report-weather-card">
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
      </Card>
    </div>
  );
}

export default WeatherReportDetails;
