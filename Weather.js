import React from 'react'

function Weather(props) {
    const weath = props.forecast.weather.slice()
    const icon = weath[0].icon
    return (
        <div className="weatherDayContainer">
            <h3>{getCurrentDay(props.forecast.dt)}</h3>
            <h4>{getMonthYear(props.forecast.dt)}</h4>
            <img src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'} alt={''} />
            <h3>{Math.trunc(props.forecast.temp.max)}&#176; / {Math.trunc(props.forecast.temp.min)}&#176;</h3>
            <h5>Humidity is {props.forecast.humidity}%</h5>
            <h5>Rain Chance: {props.forecast.pop * 100}%</h5>
        </div>
    )
}

function getCurrentDay(utcTimeStamp) {
    const Day = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };

    let currentDay = new Date(utcTimeStamp * 1000);

    return Day[currentDay.getDay()];
}

function getMonthYear(utcTimeStamp) {
    let currentDate = new Date(utcTimeStamp * 1000);

    const month = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }

    return `${month[currentDate.getMonth()]} ${currentDate.getDate()} \n ${currentDate.getFullYear()}`;
}

export default Weather;