
const API_KEY = "995662462bc0441fa2ee58b923c0ec91";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units-metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp -273.15,);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / 🌡️${temp} ℃`;
    });
}

  function onGeoError() {
    alert("날씨 정보를 찾을 수 없습니다");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);