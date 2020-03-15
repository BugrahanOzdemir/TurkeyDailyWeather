const temp = document.querySelector(".temperature");
const cityName = document.querySelector(".cityName");
const description = document.querySelector(".description");
const searchBox = document.querySelector(".search-txt");
const searchButton = document.querySelector('.search');
const precipitation = document.querySelector(".precipitation");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".pictoFrame");



document.addEventListener("DOMContentLoaded", function() {
  let apiLocal = `https://api.weatherbit.io/v2.0/current?city=Ankara,TR&lang=tr&key=e2cf801ab51e4c628356b28f8574f894`;
  setData(apiLocal);
});

searchButton.addEventListener('click', function(){
    const apiSearch = `https://api.weatherbit.io/v2.0/current?city=${searchBox.value},TR&lang=tr&key=e2cf801ab51e4c628356b28f8574f894`;
    if(searchBox.value != ""){
        setData(apiSearch);
    }else{
        alert('Lütfen Bir Şehir Adı Girin.');
    }
})

function setData(api) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", api, true);

    xhr.onload = function() {

        if (this.status >= 200 && this.status < 300) {
            let response = JSON.parse(this.responseText).data[0];
            // Set Temperature
            let tmpRes = response.temp;
            tmpRes = tmpRes.toString();
            tmpRes = tmpRes.slice(0, 4);
            let tempHtml = `
                ${tmpRes}°
            `;
            temp.innerHTML = tempHtml;

            // Set City Name
            let cityNameHtml = `
            ${response.city_name}<span><sup>${response.country_code}</sup></span>
            `;
            cityName.innerHTML = cityNameHtml;

            // Set Description
            let descHtml = `
                ${response.weather.description}
            `;
            description.innerHTML = descHtml;

            // Set Precipitation
            let precipHtml = `
                Yağmur Olasılığı: ${response.precip}%
            `;
            precipitation.innerHTML = precipHtml;

            // Set Wind Speed
            let windRes = response.wind_spd;
            windRes = windRes.toString();
            windRes = windRes.slice(0, 3);
            let windHtml = `
            Rüzhar Hızı: ${windRes} km/H
            `;
            wind.innerHTML = windHtml;
        
            // Set Icon
            let wCode = response.weather.code;
            if (wCode >= 200 && wCode <= 202 || wCode >= 500 && wCode <= 522 || wCode >= 300 && wCode <= 302) {
                let wIconHtml = `
                    <div class="icon">
                        <div class="cloud2"></div>
                        <div class="rain"></div>
                    </div>
                `;
                weatherIcon.innerHTML = wIconHtml;
            } else if (wCode >= 230 && wCode <= 233) {
                let wIconHtml = `
                    <div class="icon" >
                        <div class= "cloud2"></div>
                        <div class="thunder">
                            <div class="bolt"></div>
                                <div class="bolt"></div>
                        </div>
                    </div>
                `;
                weatherIcon.innerHTML = wIconHtml;
            } else if (wCode >= 300 && wCode <= 302) {
                let wIconHtml = `
                <div class="icon" >
                    <div class= "cloud2"></div>
                    <div class="drizzle"></div>
                </div>
            `;
                weatherIcon.innerHTML = wIconHtml;
            } else if (
                (wCode >= 600 && wCode <= 610) ||
                (wCode >= 621 && wCode <= 623)
            ) {
                let wIconHtml = `
                <div class="icon" >
                    <div class= "cloud2"></div>
                    <div class="snow"></div>
                    <div class="flake"></div>
                    <div class="flake"></div>
                    <div class="flake"></div>
                    <div class="flake"></div>
                    <div class="flake"></div>
                </div>
            `;
                weatherIcon.innerHTML = wIconHtml;
            } else if (wCode >= 800 && wCode <= 801) {
                let wIconHtml = `
                <div class="icon" >
                    <div class="rays">
                    <div class="ray"></div>
                    <div class="ray"></div>
                    <div class="ray"></div>
                    <div class="ray"></div>
                    </div>
                    <div class="sun"></div>
                </div>
            `;
                weatherIcon.innerHTML = wIconHtml;
            } else if (wCode >= 801 && wCode <= 804) {
                let wIconHtml = `
                <div class="icon" >
                    <div class="cloud2 small-cloud"></div>
                    <div class="cloud2"></div>
                </div>
                `;
                weatherIcon.innerHTML = wIconHtml;
            }
        }else{
            console.log('asd')
        }
    }
    xhr.send();
}