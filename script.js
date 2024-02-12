let myCity = `Oslo`
let myAPI = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=ffda05612339c83c0f21cebf39da018f`
fetch(myAPI)
    .then (response => response.json())
    .then (data => {
        console.log(data);
        console.log(data.name);
    })