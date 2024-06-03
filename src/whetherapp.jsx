import SearchBox from "./searchBox";
import InfoBox from "./infobox";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import DarkMode from "./switch";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        temp: 30,
        feels_like: 30,
        tempMin: 20,
        tempMax: 20,
        humidity: 20,
        weather: "haze",
        wind_speed: 20,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <Box className="container"
        borderRadius={3}
        overflow={"hidden"}
            height={645}
            width={345}
            my={4}
            display="flex"
            alignItems="center"
            marginTop={1}
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
        >

            <div >
            <DarkMode />
                <h2>Weather App</h2>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </Box>

    );
}
