import React, { Component } from 'react';
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import axios from 'axios';
import { Container, TopContainer, Background, Title, LamaContainer, LamaImg, Bubble, Speech, BubbleTriangle, BlockContainer, Block, TopBlock, MiniTitle, BottomBlock, MiniImg, DataText, SpeechData } from './components';


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
      weathercity: "",
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
          weathercity: res.data.name,  
        });
      })
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Background image=""></Background>
        <TopContainer>
          <Title>Should I take an umbrella in {this.state.weathercity} ?</Title>
        </TopContainer>

        <LamaContainer>
          <LamaImg src=""/>
          <Bubble>
            {this.state.weathermain === "Rainy" ?
            <Speech>
              It's raining!
            </Speech> :
            this.state.weathermain === "Clear" ? 
            <Speech>
              Not a cloud!
            </Speech> : 
            this.state.weathermain === "Clouds" ? 
            <Speech>
              It's pretty cloudy.
            </Speech> :
            <Speech>
            Generic weather.
          </Speech> 
          }
            
          </Bubble>
          <BubbleTriangle/>
        </LamaContainer>

        <BlockContainer>
          <Block>
            <TopBlock>
              <MiniTitle></MiniTitle>
              </TopBlock> 
            <BottomBlock>
              <MiniImg/>
              <DataText></DataText>
              <SpeechData></SpeechData>
            </BottomBlock>
          </Block>
          <Block>
            <TopBlock>
              <MiniTitle></MiniTitle>
              </TopBlock> 
            <BottomBlock>
              <MiniImg/>
              <DataText></DataText>
              <SpeechData></SpeechData>
            </BottomBlock>
          </Block>
          <Block>
            <TopBlock>
              <MiniTitle></MiniTitle>
              </TopBlock> 
            <BottomBlock>
              <MiniImg/>
              <DataText></DataText>
              <SpeechData></SpeechData>
            </BottomBlock>
          </Block>
        </BlockContainer>
      </Container>
    );
  }
}

export default App;

// if (this.state.weatherdata.length > 0)
