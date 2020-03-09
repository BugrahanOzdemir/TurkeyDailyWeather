const btnSearch = document.getElementById('btn-search');
const searchCity = document.querySelector('.search-city');

const cityInfo = document.querySelector('.city-info');
const weatherInfo = document.querySelector('.weather-info');

function getBackgroundImage(){
    let api = `https://pixabay.com/api/?key=15543021-36d52c78436bd0de593fa8b53&q=${searchCity.value}&image_type=photo`;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);

    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let res = JSON.parse(this.responseText);
            console.log(res.hits[5].largeImageURL);
            return res.hits[0].largeImageURL;
        } else {
            alert(`Error Code: ${this.status}`);
        }

    xhr.send();
}

function useApi(){
    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${searchCity.value}&country=TR&key=85ee9235c11945eaa7c08cd5eb6ca673&lang=tr`;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function(){
        if (this.status >= 200 && this.status < 300)
        {
            let res = JSON.parse(this.responseText).data[0];
            let inputCityName = searchCity.value;
            let cityHtml ="";
            cityHtml = `
                <h1 class="city-name section-text">${res.city_name} <span style="font-size: 50%">${res.country_code}</span></h1>
                <h5 class="date-time section-text">${res.ob_time}</h5>
            `
            let weatherHtml = "";
            weatherHtml = `
            <div class="weather-type">
                <img class="weather-image" src="https://www.weatherbit.io/static/img/icons/${res.weather.icon}.png">
                <p class="section-text-big">${res.temp}°</p>
            </div>
            `
            weatherInfo.innerHTML = weatherHtml;
            cityInfo.innerHTML = cityHtml;
        }
        else
        {
            alert(`Error Code: ${this.status}`);
        }
    xhr.send();
}

btnSearch.addEventListener('click', useApi());