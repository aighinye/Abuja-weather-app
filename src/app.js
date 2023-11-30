function refreshWeather(response) {
   let temperatureElement = document.querySelector("#temperature"); 
   let temperature = response.data.temperature.current;
   let cityElement = document.querySelector("#city");

   cityElement = response.data.city;
   
temperatureElement.innerHTML = Math.round(temperature);
    
}
function searchCity(city) {
    let apiKey = "243c458c7335db869e116o40t5bf4ad2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}



function handleSearchSumbmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
searchCity(searchInput.value);
} 

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumbmit);
