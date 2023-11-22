import React, { useState } from "react";
import "../WeatherLocation/weather.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { weatherLiveLocation, weatherReport } from "../services/dataService";
import WeatherReportDetails from "../WeatherReport/WeatherReportDetails";

function WeatherLoctionInput() {
  const [inputText, setInputText] = useState("");

  const [weatherData, setWeatherData] = useState({
    temperature: "",
    city: "",
    description: "",
    icon: "",
    country: "",
    feelsLike:"",
    humidity:""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    weatherReport(inputText)
      .then((data) => {
        if (data?.data?.error?.code == "615") {
         setErrorMessage("Please enter a valid City Name");
        } else if (data?.data?.error?.code == "601") {
          setErrorMessage("Please enter a City Name");
        } else if (data?.data?.error?.code == "105") {
          setErrorMessage("Internal Server Error");
        } else {
          setWeatherData({
            temperature: data?.data?.current?.temperature,
            city: data?.data?.location?.name,
            description: data?.data?.current?.weather_descriptions[0],
            icon: data?.data?.current?.weather_icons[0],
            country: data?.data?.location?.country,
            feelsLike:data?.data?.current?.feelslike,
            humidity:data?.data?.current?.humidity,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
        setErrorMessage("Error fetching weather data");
      });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        weatherLiveLocation(lat, lon)
          .then((data) => {
            if (data?.data?.error?.info) {
              setErrorMessage("Error getting location");
            } else {
              setWeatherData({
                temperature: data?.data?.current?.temperature,
                city: data?.data?.location?.name,
                country: data?.data?.location?.country,
                description: data?.data?.current?.weather_descriptions[0],
                icon: data?.data?.current?.weather_icons[0],
                feelsLike:data?.data?.current?.feelslike,
                humidity:data?.data?.current?.humidity,
              });
            }
          })
          .catch((error) => {
            console.error("Error getting location", error);
            setErrorMessage("Error getting location");
          });
      });
    }
  };

  return (
    <>
      <div className="weather-card">
        {!weatherData.city ? (
            <Box component="form" onSubmit={handleSubmit}>
              <Card className="card-body">
                <Stack className="card-header" direction="row">
                  <CardHeader title="Weather App" />
                </Stack>
                <Divider />
                <CardContent>
                  <Stack spacing={2} direction="column">
                    {errorMessage && (
                      <Typography color="red" variant="h6">
                        {errorMessage}
                      </Typography>
                    )}
                    <Stack spacing={1} direction="column">
                      <TextField
                        label="Enter a City Name"
                        id="outline-size-small"
                        size="small"
                        fullWidth="true"
                        onChange={(e) => setInputText(e.target.value)}
                      />
                      <Divider textAlign="center">Or</Divider>
                      <Button
                        variant="contained"
                        fullWidth="true"
                        onClick={handleLocationClick}
                      >
                        Get Device Location
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
        ) : (
          <WeatherReportDetails
            weatherData={weatherData}
            setWeatherData={setWeatherData}
            setInputText={setInputText}
            setErrorMessage={setErrorMessage}
          />
        )}
      </div>
    </>
  );
}

export default WeatherLoctionInput;
