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
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Barcelona,Spain&appid=7d19523678b80c45bc75b140ae11de1d&units=metric`)
      .then(res => {
        console.log(res)
        this.setState({ weatherdata: res.data });
      })
  }



  render() {
    console.log(this.state.weatherdata.weather)
    return (
      <div>
        Start
        <Titles />
        <Weather />

      </div>
    );
  }
}

export default App;

// if (this.state.weatherdata.length > 0)
