const searchButton = document.querySelector('.searchButton');
const inputBox = document.querySelector('.inputLocation');

const APP_SECRET = ""

function generateRequestURL(query) {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_SECRET}&units=metric`;
    console.log(baseUrl);
    return baseUrl;
}

function updateFields(weatherData) {
    // Image update
    document
        .querySelector('.weatherImage')
        .setAttribute(
            'src',
            `./resources/images/${weatherData['weather'][0][
                'main'
            ].toLowerCase()}.png`
        );
    //temperature update
    document.querySelector('.temperature').innerText = Math.round(
        weatherData.main.temp
    );

    // city name update
    document.querySelector('.city').innerText = weatherData.name;

    // humidity update
    document.querySelector('.humidity').innerText = weatherData.main.humidity;
    //wind speed update
    document.querySelector('#wind-speed').innerText = weatherData.wind.speed;
}

function searchWeather(query) {
    const requestURL = generateRequestURL(query);
    console.log(requestURL);
    console.log('started ......');

    fetch(requestURL)
        .then((response) => response.json())
        .then((responseBody) => {
            if (responseBody.cod !== 200) {
                throw new Error('Weather request failed');
            }
            console.log(responseBody);
            updateFields(responseBody);
        })
        .catch((err) => {
            // Handle the error here.
            console.log(err.message);
        });
    console.log('ended ....');
}

function handleWeatherEvent(e) {
    const query = inputBox.value;
    searchWeather(query);
    inputBox.value = '';
}
searchButton.addEventListener('click', handleWeatherEvent);
inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleWeatherEvent(e);
});
