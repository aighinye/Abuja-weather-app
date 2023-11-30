function searchCity(city) {
    let apiKey = "243c458c7335db869e116o40t5bf4ad2";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=metric';
console.log(apiUrl);
}



function handleSearchSumbmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);
} 

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumbmit);