import React, { Component } from 'react';
import axios from 'axios';
import { Container, Relative, TopContainer, Background, Title, LamaContainer, LamaImg, Bubble, Speech, BubbleTriangle, BubbleContainer, BlockContainer, Block, TopBlock, MiniTitle, BottomBlock, MiniImg, DataText, SpeechData } from './components';


const API_KEY = "7d19523678b80c45bc75b140ae11de1d";
const lama = require('./img/lama.png');
const drops = require('./img/drops.png');

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      weatherdata: [], 
      weathermain: "",
      weatherdes: "",
      weathertemp: "",
      weathercloud: "",
      weatherrain: "",
      weathercity: "",
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Barcelona,Spain&appid=7d19523678b80c45bc75b140ae11de1d&units=metric`)
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

  render(props) {
    console.log(this.state)
    return (
      <Container>
        <Background image={drops} lol="green"></Background>
        <Relative>
          <TopContainer>
            <Title>Should I take an umbrella in {this.state.weathercity}?</Title>
          </TopContainer>

          <LamaContainer>
            <LamaImg src={lama} alt="lama" />
            <BubbleContainer>
              <BubbleTriangle />
              <Bubble><Speech>
                {this.state.weathermain === "rain" ? "It's raining! At least it's good for the plants..."
                  :
                  this.state.weathermain === "Clear" ? "Not a cloud!" : this.state.weathermain === "Clouds" ? "It's pretty cloudy. This cloud looks like you..." 
                  :
                  this.state.weathermain === "clear sky" ? "Perfect sky! We can go out and enjoy it!"
                  :
                  this.state.weathermain === "few clouds" ? "Slightly cloudy sky." : this.state.weathermain === "scattered clouds" ? "Barely any clouds." 
                  : 
                  this.state.weathermain === "broken clouds" ? "Are those dark clouds..."
                  :
                  this.state.weathermain === "shower rain" ? "Oh well, it's raining. But not that much." : this.state.weathermain === "thunderstorm" ? "Thunderstorms. Let's stay inside." 
                  :
                  this.state.weathermain === "mist" ? "Spooky, I like it."
                  :
                  this.state.weathermain === "snow" ? "Yay! Let's build a snowman!"
                  : 
                  "Currently I'm sleeping so look outside your window if you want the weather."
                }</Speech>
              </Bubble>

            </BubbleContainer>
          </LamaContainer>

          <BlockContainer>
            <Block>
              <TopBlock rain="true">
                <MiniTitle>Rain</MiniTitle>
              </TopBlock>
              <BottomBlock>
                <MiniImg />
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
                <MiniImg />
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
                <MiniImg />
                <DataText>
                  Currently it's {this.state.weathertemp}° outside
              </DataText>
                <SpeechData>{this.state.weathertemp <= 0 ? "It's freezing outside!" :
                  this.state.weathertemp > 0 ? "It's cold, take a coat" : this.state.weathertemp > 10 ? "Don't be decieved, it's pretty cold" : this.state.weathertemp > 15 ? "It's nice, a bit chilly maybe" : this.state.weathertemp > 20 ? "Great temperature" : this.state.weathertemp > 25 ? "Beach temperature" : this.state.weathertemp > 30 ? "It's quite hot" : this.state.weathertemp > 35 ? "It's super hot!" : "Errr please go out and check the temperature for me"}</SpeechData>
              </BottomBlock>
            </Block>
          </BlockContainer>
        </Relative>
      </Container>
    );
  }
}

export default App;

// if (this.state.weatherdata.length > 0)
