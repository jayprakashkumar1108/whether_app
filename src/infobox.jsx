import React from 'react';
import { createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1714029122697-d74d8ba99893?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1522434152110-15f9d8292543?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1582122423889-4dc16dfca9f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infoBox">
            <div className='cardcontainer'>
                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="weather image"
                        height="140"
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 80 ? <ThunderstormIcon />:info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className='card-para'><strong>Temperature:</strong> {info.temp}&deg;C</span><br />
                            <span className='card-para'><strong>Humidity:</strong> {info.humidity}%</span><br />
                            <span className='card-para'><strong>Min Temp:</strong> {info.tempMin}&deg;C</span><br />
                            <span className='card-para'><strong>Max Temp:</strong> {info.tempMax}&deg;C</span><br />
                            <span className='card-para'><strong>Wind Speed:</strong> {info.wind_speed} km/h</span><br />
                            <span className='card-para'><strong>The weather can be described as</strong> <i>{info.weather}</i> and feels like {info.feels_like} &deg;C</span>
                        </Typography>

                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
