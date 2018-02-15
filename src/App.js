import React, { Component } from 'react';
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import axios from 'axios';


// const API_KEY = "7d19523678b80c45bc75b140ae11de1d";

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      weatherdata: [],
      weathermain: "",
      weatherdes: "",
      weathertempmax: "",
      weathertempmin: "",
      weathercloud: "",
      weatherrain: "",
      weathername: "",
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Barcelona,Spain&appid=7d19523678b80c45bc75b140ae11de1d&units=metric`)
      .then(res => {
        // console.log(res)
        this.setState({ 
          weatherdata: res.data,
          weathermain: res.data.weather[0].main,
          weatherdes: res.data.weather[0].description,
          weathertempmax: res.data.main.temp_max, 
          weathertempmin: res.data.main.temp_min,
          weathercloud: res.data.clouds.all,
          weatherrain: res.data.rain3h,
          weathername: res.data.name,  
        });
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Titles />
        <span>{this.state.weathertemp}</span>
        <span>{this.state.weatherdesc}</span>

      </div>
    );
  }
}

export default App;

// if (this.state.weatherdata.length > 0)
