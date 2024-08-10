let api = "ad16f4a2f73486967e32a6a0f8774e0c";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weathericon = document.querySelector(".weather-icon");
let weather= document.querySelector(".weather")

async function weathercheck(place) {
    const response = await fetch(apiurl + place + `&appid=${api}`);
    var data = await response.json();
    
    if(response.status==404){
        document.querySelector(".errortext").style.display= "block";
        weather.style.display="none";
    }
    else{

    let city = document.querySelector(".city");
    city.innerHTML = data.name;

    let temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp) + " °C";

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + " %";

    let wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main.toLowerCase()) {
        case "clouds":
            weathericon.src = "clouds.png";
            break;
        case "clear":
            weathericon.src = "clear.png";
            break;
        case "drizzle":
            weathericon.src = "drizzle.png";
            break;
        case "humidity":
            weathericon.src = "humidity.png";
            break;
        case "mist":
            weathericon.src = "mist.png";
            break;
        case "rain":
            weathericon.src = "rain.png";
            break;
        case "snow":
            weathericon.src = "snow.png";
            break;
        case "wind":
            weathericon.src = "wind.png";
            break;
    }
    weather.style.display= "block";
    document.querySelector(".errortext").style.display= "none";
} 
}

searchbtn.addEventListener("click", () => {
    weathercheck(searchbox.value);
});
