import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Weather(){
 
    const API_KEY='7357b1aa28ea4b9bf2c716163a85aded';
    // const inputRef=useRef();
   const [cityName,setCityName]=useState("London");
   const [weather,setWeatherData]=useState(false);

   async function fetchDetails(){
    try {
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
        // console.log( response.data);
        
       setWeatherData({
            name:response.data.name,
            temp:Math.floor(response.data.main.temp),
            humidity:response.data.main.humidity,
            pressure:response.data.main.pressure,
            wind:response.data.wind.speed
       }
       )
        // console.log(weather.temp);
        
        
        
    } catch (error) {
        alert("Enter proper City name");
        console.log(error.message);
    }
   }

useEffect(()=>{
    fetchDetails();
},[])

// if(cityName===" "){
//     alert("Please Enter City Name:");
// }




    return <>
        <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
        
            <div class="search-container mb-3 d-flex">
                <input type="text" class="form-control" placeholder="Search city..." id="searchCity"  onChange={(e)=>{setCityName(e.target.value)}} style={{borderTopLeftRadius: '10px', 
    borderBottomLeftRadius: '10px' }} />
              
               
             <button
              className="btn btn-primary" style={{height: "45px"}}
              onClick={fetchDetails}
            >Search</button>
            </div>
          
            <div class="card text-center p-4 shadow-lg">
                <h3 class="mb-1" id="cityName">{weather.name}</h3>
                <h1 class="display-4 fw-bold" id="temperature">{weather.temp}°C</h1>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" width="100" id="weatherIcon"/>
                <p class="text-muted" id="weatherCondition">Cloudy</p>
                <div class="d-flex justify-content-around mt-3">
                    <div><strong>Wind:</strong> <span id="windSpeed">{weather.wind} km/h</span></div>
                    <div><strong>Humidity:</strong> <span id="humidity">{weather.humidity}%</span></div>
                    <div><strong>Pressure:</strong> <span id="pressure">{weather.pressure} hPa</span></div>
                </div>
            </div>
        </div>
    </div>
</div>

       
       
    </>
}


export default Weather;