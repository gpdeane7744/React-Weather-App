import React, { Component } from 'react'

class CurrentWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: props.currentWeather,
            currentIcon: props.currentIcon
        }
        
    }

    render() {

        return (
            <div>
                <img src={'http://openweathermap.org/img/wn/' + this.state.currentIcon + '@2x.png'} alt={''} />
                <h1>Current Temp {Math.trunc(this.state.current.temp)}&#176;</h1>
                <h3>Feels Like {Math.trunc(this.state.current.feels_like)}&#176;</h3>
                <h3>Humidity {this.state.current.humidity}%</h3>
            </div>
        )
        
    }

}

export default CurrentWeather