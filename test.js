// function setBackground(){
//     let api = `https://pixabay.com/api/?key=15543021-36d52c78436bd0de593fa8b53&q=${searchCity.value}&image_type=photo`;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', api, true);

//     xhr.onload = function(){
//         if(this.status >= 200 && this.status < 300){
//             let res = JSON.parse(this.responseText);
//             console.log(res.hits[5].largeImageURL);
//             return res.hits[0].largeImageURL;
//         }else{
//             alert(`Error Code: ${this.status}`);
//         }
//     }
//     xhr.send();
// }

// function getAPI(){
//     const apiUrl = `http://api.weatherbit.io/v2.0/current?city=${searchCity.value}&country=TR&key=b47d539ded044520886555026315e0c1&lang=tr`;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', apiUrl, true);

//     xhr.onload = () => {
//         if(this.status >= 200 && this.status < 300){
//             console.log(this.status);
//             let res = JSON.parse(this.responseText).data[0];

//             let cityHtml ="";
//             cityHtml += `
//                 <h1 class="city-name section-text">${res.city_name} <span style="font-size: 50%">${res.country_code}</span></h1>
//                 <h5 class="date-time section-text">${res.ob_time}</h5>
//             `

//             let weatherHtml = "";
//             weatherHtml += `
//             <div class="weather-type">
//                 <img class="weather-image" src="https://www.weatherbit.io/static/img/icons/${res.weather.icon}.png">
//                 <p class="section-text-big">${res.temp}°</p>
//             </div>
//             `

//             console.log(weatherHtml);
//             console.log(cityHtml);

//             weatherInfo.innerHTML = weatherHtml;
//             cityInfo.innerHTML = cityHtml;
//         }else{
//             console.log('Error Code: ' + this.status);
//         }

//         xhr.send();
//     }
// }