let btnSearch = document.getElementById('btn-search');
const apiUrl = "https://api.weatherbit.io/v2.0/current?city=Ankara&country=TR&key=85ee9235c11945eaa7c08cd5eb6ca673&lang=tr";

btnSearch.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let res = JSON.parse(this.responseText).data[0];
            console.log(res.city_name);
        } else {
            alert(`Error Code: ${this.status}`);
        }
    }
    xhr.send();
})