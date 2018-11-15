import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";
import Tiles from "./components/Tiles";
//import { resolveComponents } from "uri-js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: undefined,
      city: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }

  getWeather = async e => {
    //console.log(e);
    e.preventDefault();

    const api_key = "115cefc40c371cb609f15c000ee85611";
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city, country);

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
    );

    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        country: response.sys.country,
        city: response.name,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        description: response.weather[0].description
      });
    } else
      this.setState({
        error: "Please enter the values"
      });
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Tiles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
