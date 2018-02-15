import React, { Component } from 'react';
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import axios from 'axios';


const API_KEY = "7d19523678b80c45bc75b140ae11de1d";

class App extends Component {
  // eslint-disable-next-line


  constructor() {
    super();
    this.state = {
      weatherdata: [],
      weatherdesc: "",
      weathertemp: "",
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Barcelona,Spain&appid=7d19523678b80c45bc75b140ae11de1d&units=metric`)
      .then(res => {
        console.log(res)
        console.log(res.data.weather[0].main)
        this.setState({ 
          weatherdata: res.data,
          weatherdesc: res.data.weather[0].main,
          weathertemp: res.data.main.temp, 
        });
      })
  }



  render() {
    console.log(this.state.weatherdesc)
    return (
      <div>
        Start
        <Titles />
        <span>{this.state.weathertemp}</span>
        <span>{this.state.weatherdesc}</span>

      </div>
    );
  }
}

export default App;

// if (this.state.weatherdata.length > 0)
