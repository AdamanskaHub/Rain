import React, { Component } from 'react';
import axios from 'axios';
import { Container, Relative, TopContainer, DD, Background, Title, LamaContainer, LamaImg, Bubble, Speech, BubbleTriangle, BubbleContainer, BlockContainer, Block, TopBlock, MiniTitle, BottomBlock, MiniImg, DataText, SpeechData } from './components';
import Lama from './components/Lama';

const API_KEY = "7d19523678b80c45bc75b140ae11de1d";

const drops = require('./img/drops.png');
const gouttes = require('./img/gouttes.png');
const temp = require('./img/temp.png');
const clouds = require('./img/clouds.png');

const lama = require('./img/lama.png');
const happy = require('./img/happy.png');
const excited = require('./img/excited.png');
const sad = require('./img/sad.png');
const horrified = require('./img/horrified.png');

class App extends Component {
  constructor(props) {
    super(props);
    this.cityClick = this.cityClick.bind(this);
    this.state = {
      weatherdata: [], 
      weathermain: "",
      weatherdes: "",
      weathertemp: "",
      weathercloud: "",
      weatherrain: "",
      weathercity: "Barcelona",
      popupVisible: false,
    }
  }

  cityClick() {
    if (!this.state.popupVisible) {
        document.addEventListener("click", this.cityClick, false);
    } else {
        document.removeEventListener("click", this.cityClick, false);
    }
    this.setState({
        popupVisible: !this.state.popupVisible
    });
  }

  changeCity(e) {
    this.setState({weathercity : e});
    this.getTheStuff(e)
    display(this.state.weathertemp)
  }

  getTheStuff(city) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},Spain&appid=7d19523678b80c45bc75b140ae11de1d&units=metric`)
      .then(res => {
        // console.log(res.data.rain["3h"])
        this.setState({
          weatherdata: res.data,
          weathermain: res.data.weather[0].main,
          weatherdes: res.data.weather[0].description,
          weathertemp: res.data.main.temp,
          weathercloud: res.data.clouds.all,
          weatherrain: res.data.rain && res.data.rain["3h"] ? res.data.rain["3h"] : null,
          weathercity: res.data.name,
        });
      })
  }

  componentDidMount() {
    this.getTheStuff("Barcelona");
  }

  render(props) {
    let tempText = getTempText(this.state.weathertemp);
    return (
      <Container>
        <Background image={drops}></Background>
        <Relative>

          <TopContainer>
            <Title>Should I  an umbrella in 
              <span onClick={this.cityClick}>{this.state.weathercity}</span>
              ?</Title>
              {this.state.popupVisible ? 
              <DD>
                <p onClick={()=>this.changeCity("Barcelona")}>Barcelona</p>
                <p onClick={()=>this.changeCity("Madrid")}>Madrid</p> 
                <p onClick={()=>this.changeCity("Valencia")}>Valencia</p> 
                <p onClick={()=>this.changeCity("Malaga")}>Malaga</p>
                </DD> : null}
          </TopContainer>

            <Lama />

          <BlockContainer>
            <Block>
              <TopBlock rain="true">
                <MiniTitle>Rain</MiniTitle>
              </TopBlock>
              <BottomBlock>
                <MiniImg gouttesimg={gouttes} src={gouttes}/>
                <DataText>{this.state.weatherrain === 0 ? "Not a drop" :
                  this.state.weatherrain > 0.01 ? "A bit of rain" : this.state.weatherrain > 1 ? "Some rain" : this.state.weatherrain > 2 ? "Quite a lot of rain" : this.state.weatherrain > 3 ? "Wow! It's pouring!" : "Not a drop"}</DataText>
                <SpeechData>{this.state.weatherrain === 0 ? "That's good" :
                  this.state.weatherrain > 0.01 ? "Some rain, but manageable" : this.state.weatherrain > 1 ? "Take an umbrella" : this.state.weatherrain > 2 ? "That's a lot of rain..." : this.state.weatherrain > 3 ? "That's too much, I don't wanna go outside!" : "No rain, just how I like it"}</SpeechData>
              </BottomBlock>
            </Block>

            <Block>
              <TopBlock clouds="o">
                <MiniTitle>Clouds</MiniTitle>
              </TopBlock>
              <BottomBlock>
                <MiniImg cloudsimg={clouds} src={clouds}/>
                <DataText> {this.state.weathercloud === 0 ? "Clear skies!" :
                  this.state.weathercloud > 0 ? "A few clouds" : this.state.weathercloud > 30 ? "Definitely some clouds" : this.state.weathercloud > 60 ? "It's quite cloudy" : this.state.weathercloud > 90 ? "Clouds, clouds everywhere" : "Clear skies!"}</DataText>
                <SpeechData>
                  {this.state.weathercloud === 0 ? "I love it!" :
                    this.state.weathercloud > 0 ? "I don't mind some clouds" : this.state.weathercloud > 30 ? "I wish there were less clouds" : this.state.weathercloud > 60 ? "The clouds look like my fur" : this.state.weathercloud > 90 ? "The sky is just clouds" : "I like when there are just a few clouds"}
                </SpeechData>
              </BottomBlock>
            </Block>

            <Block>
              <TopBlock temp="o">
                <MiniTitle>Temperature</MiniTitle>
              </TopBlock>
              <BottomBlock>
                <MiniImg tempimg={temp} src={temp}/>
                <DataText>
                  Currently it's {this.state.weathertemp}° outside
              </DataText>
                <SpeechData>
                  {/* {getTempText(this.state.weathertemp)} */}
                  {display(this.state.weathertemp)}
                  </SpeechData>
              </BottomBlock>
            </Block>
          </BlockContainer>
        </Relative>
      </Container>
    );
  }
}

function getTempText(x) {
  // console.log("gettemp")
  if (x<=0) {return "It's freezing outside!"}
  else if(x>0) {return "It's cold, take a coat"}
  else if(x>10) {return "Don't be decieved, it's pretty cold"}
  else if(x>15) {return "It's nice, a bit chilly maybe"}
  else if(x>20) {return "Great temperature"}
  else if(x>25) {return "Beach temperature"}
  else if(x>30) {return "It's quite hot"}
  else if(x>35) {return "It's super hot!"}
};

function display(x) {
  return getTempText(x)
}

export default App;

// if (this.state.weatherdata.length > 0)