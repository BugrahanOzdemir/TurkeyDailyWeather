const btnSearch = document.querySelector('.btn-search');
const searchCity = document.querySelector('.search-city');

const cityInfo = document.querySelector('.city-info');
const weatherInfo = document.querySelector('.weather-info');
const apiData = document.querySelector('.api-data');


btnSearch.addEventListener('click', () => {
    const api = `https://api.weatherbit.io/v2.0/current?city=Ankara&country=TR&key=b47d539ded044520886555026315e0c1&lang=tr`;
    console.log(api);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);

    xhr.onload = () => {
        console.log('Onload worked!');
        console.log(this.status);
    }
    //Xhr Send
    xhr.send()
})