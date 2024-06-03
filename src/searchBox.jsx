import { useState } from 'react'
import "./searchBox.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function searchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "3948b6c33832499e6afee34032a66291";

    let getwhetherinfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonresponse = await response.json(response);
            console.log(jsonresponse);
            let result = {
                city: city.toLocaleUpperCase(),
                feels_like: jsonresponse.main.feels_like,
                temp: jsonresponse.main.temp,
                tempMin: jsonresponse.main.temp_min,
                tempMax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                weather: jsonresponse.weather[0].description,
                wind_speed: jsonresponse.wind.speed,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
       
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit =async (evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getwhetherinfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    };
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField 
                    className='searchBox'
                        id="demo-helper-text-aligned"
                        label="City Name"
                        required
                        value={city}
                        onChange={handleChange}
                    />
                    <br></br> <br></br>
                    <Button variant="contained" type='submit'>Search</Button>
                    {error && 
                    <p>No such place exist  in our API!</p>}
                </div>
            </form>
        </div>
    );
}
