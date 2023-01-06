const getWeather = () => {
        alert("i am cliked")
  let input = document.getElementById("input").value;

  fetch(
    `put your weather api with api code `
  )
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
        console.log(data);
      let inputName = document.getElementById("name");
      let country = document.getElementById("country");
      let temp = document.getElementById("temp");
      let feelsLike = document.getElementById("feelsLike");
      let humidity = document.getElementById("humidity");
      let wind = document.getElementById("wind");
      let lat = document.getElementById("lat");
      let lon = document.getElementById("lon");
      let visibility = document.getElementById("visibility");
      let air = document.getElementById("air");

      inputName.innerHTML = data.name;
      country.innerHTML = data.sys.country;
      temp.innerHTML = parseInt(data.main.temp - 273.15) ;
      feelsLike.innerHTML = parseInt(data.main.feels_like - 273.15);
      humidity.innerHTML = data.main.humidity;
      wind.innerHTML = data.wind.speed;
      lat.innerHTML = data.coord.lat;
      lon.innerHTML = data.coord.lon;
      visibility.innerHTML = data.visibility / 1000;
      air.innerHTML = data.main.pressure;

      showImage(data);
    });
    document.getElementById("input").value = "";
};

const showImage = (data)=>{
    let body = document.querySelector(".bodyData");
    if(data.weather[0].main === "Clouds" || data.weather[0].main === "Clear"){
        document.querySelector(".cloud").style.display = "block";
        body.style.display = "none";
    }else if(data.weather[0].main === "Smoke"){
        body.style.display = "none";
        document.querySelector(".smoke").style.display = "block";
    }else if(data.weather[0].main === "Rain"){
        body.style.display = "none";
        document.querySelector(".rain").style.display = "block";
    }else if(data.weather[0].main === "Haze"){
        body.style.display = "none";
        document.querySelector(".haze").style.display = "block";
    }
}
