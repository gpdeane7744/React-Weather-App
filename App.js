import './App.css';
import React, { Component } from 'react';
import Weather from './Components/Weather.js'
import CurrentWeather from './Components/CurrentWeather';
import Loading from './Components/Loading';
import Search from './Components/Search';

class App extends Component {
    constructor() {
        super()
        this.state = {
            current: {},
            currentIcon: "",
            daily: [],
            isLoading: false
        }
    }

    render() {
        {
            if (this.state.isLoading) {
                return (
                    <div>
                        <Loading />
                    </div>
                )
            } else {
                return (
                    <div className="App">
                        <h1 className="header">Weather Tracking App</h1>
                        <div className="weather-container">
                            <div className="currentWeather-container">
                                <Search />
                                <CurrentWeather
                                    key={this.state.current.id}
                                    currentWeather={this.state.current}
                                    currentIcon={this.state.currentIcon}
                                />
                            </div>
                            <div className="forecast-container">
                                {this.state.daily.map(weatherForecast =>
                                    <Weather
                                        key={weatherForecast.id}
                                        forecast={weatherForecast}
                                    />
                                )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        }
        
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=27.85&lon=-82.70&units=imperial&exclude=minutely,hourly,alerts&appid=145d0d0583959a69d59dd1ef3fc969c1')
            .then(res => res.json())
            .then(result => {
                this.setState(prevState => {
                    const updatedState = {
                        current: result.current,
                        currentIcon: result.current.weather[0].icon,
                        daily: result.daily.slice(0, 6),
                        isLoading: false
                    }
                    return updatedState

                })
            })
    }
}

export default App;

