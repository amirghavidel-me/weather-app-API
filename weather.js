let apiData = {
     url:"https://api.openweathermap.org/data/2.5/weather?q=",
     city: "",
     key:"&appid=2fa473090ba5db76612f1c0e3c1e20ad"
}

let btnWeather = document.querySelector("#btn-weather")
btnWeather.addEventListener("click" , function() {

     let weatherInput = document.querySelector('#weather-input')

     if(weatherInput.value == "" || weatherInput.value == "! نباید خالی بگذارید"){
          weatherInput.value = "! نباید خالی بگذارید"
     }
     else{ 
          apiData.city = weatherInput.value
          weatherInput.value = ""
          fetch(`${apiData.url}${apiData.city}${apiData.key}`).then(res => res.json())
          .then(data =>{
               showData(data)
          })
     }
     function showData(data){

          let nameElem = document.querySelector('#name')
          nameElem.innerHTML = data.name

          let tempElem = document.querySelector('#temp')
          tempElem.innerHTML = ` C^ ${Math.floor(data.main.temp - 273.15)}`

          let humidityElem = document.querySelector('#humidity')
          humidityElem.innerHTML = `% ${Math.floor(data.main.humidity)}`

          let speedElem = document.querySelector('#speed')
          speedElem.innerHTML = `km/h ${Math.floor(data.wind.speed)}`

          let mainElem = document.querySelector('#main')
          mainElem.innerHTML = data.weather[0].main
     }
} )

weatherInput.addEventListener("click" , function() {
     weatherInput.value = " "
} )

// let car = {
//      model : "pride" ,
//      years : 1390 ,
//      door : 4 ,
//      color : [ "red" , "green" , "blue"],
// }

// console.log()