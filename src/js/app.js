const btnSearch = document.querySelector('.btn-search');
const searchCity = document.querySelector('.search-city');
const background = document.getElementsByTagName('body');

btnSearch.addEventListener('click', Main);

function Main(){
    const api = `http://api.weatherbit.io/v2.0/current?city=${searchCity.value},TR&key=e2cf801ab51e4c628356b28f8574f894&lang=tr`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);

    xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
            let response = JSON.parse(this.responseText).data[0];
            setBackground(response);
        }else{
            console.log(`Error: ${this.status}`)
        }
    }
    xhr.send();
}

function setBackground(res){
    if(res.pod === "d"){
        background[0].style.backgroundImage = 'url(https://i.ibb.co/tw0nHms/day-bg.png)'
    }else{
        background[0].style.backgroundImage = 'url(https://i.ibb.co/7Gy69ck/night-bg.png)';
    }
}