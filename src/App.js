import React, { Component } from "react";
import Landing from './components/Landing';
import CitySearchBar from "./components/CitySearchBar";
import Container from "./components/Container";
import DaysContainer from "./components/DaysContainer";
import handleHttpErrors from "./helpers/handleHttpErrors.js";

const sampleApi = require(`./data/sampleApiData.json`);

class App extends Component {
  constructor(props) {
    super(props);

    // bind this to handleCityChange function
    this.handleCityChange = this.handleCityChange.bind(this);

    // initialise state
    this.state = {
      lat: 53.48095,
      lon: -2.23743,
      currentCity: "Manchester",
      data: {},
      isLoading: true,
    };
  }

  handleCityChange(lat, lon) {
    console.log(lat, lon);
    this.setState({
      lat: lat,
      lon: lon,
    });
  }

  updateDaysData(data) {
    let daysData = [];
    for (let i = 0; i < data.length; i++) {
      daysData[i] = {
        date: data[i].valid_date,
        desc: data[i].weather.description,
        icon: data[i].weather.icon,
        temp: Math.round((data[i].app_max_temp + data[i].app_min_temp) / 2),
        tempMin: Math.round(data[i].low_temp),
        tempMax: Math.round(data[i].high_temp),
      };
    };

    // update state
    this.setState({
      data: daysData,
      isLoading: false,
    });
  }

  getApiData() {
    if (process.env.REACT_APP_MODE === "dev") {
      this.updateDaysData(sampleApi.data);
    } else {
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_OWM_API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}&days=7`)
        .then(res => handleHttpErrors(res))
        .then(res => res.json())
        .then((returnedData) => {
          this.updateDaysData(returnedData.data);
        })
        .catch(console.log);
    }
  }

  componentDidMount() {
    // connect to the API
    this.getApiData();
  }

  render() {
    return (
      <div>
        <Landing>
          <h1>Weatherall</h1>
          <p>Find the latest forecast in your area.</p>
          <CitySearchBar handleCityChange={this.handleCityChange}></CitySearchBar>
        </Landing>
        <Container>
          <h2>Current city: {this.state.currentCity}</h2>
          <DaysContainer currentCity={this.state.currentCity} allData={this.state.data} />
        </Container>
      </div>
    );
  }
}

export default App;
