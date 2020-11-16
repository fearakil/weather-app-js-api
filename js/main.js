const getWeather=()=> {
    let zip = document.querySelector('#zip').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid='YOUR_API_KEY_HERE'`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let temp_max = data.main.temp_max
        let target = document.getElementById(`max`)
        let printMax = document.createElement('h5')
        printMax.innerHTML = temp_max
        target.append(printMax)

        let temp_min = data.main.temp_min
        let target1 = document.getElementById(`low`)
        let printMin = document.createElement('h5')
        printMin.innerHTML = temp_min
        target1.append(printMin)

        let temp = data.main.temp
        let target2 = document.getElementById(`temp`)
        let printTemp = document.createElement('h5')
        printTemp.innerHTML = temp
        target2.append(printTemp)

        let humidity = data.main.humidity
        let target3 = document.getElementById(`humidity`)
        let printHumidity = document.createElement('h5')
        printHumidity.innerHTML = humidity
        target3.append(printHumidity) 
    })
};
