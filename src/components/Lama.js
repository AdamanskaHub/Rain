import React, { Component } from 'react';
import { LamaContainer, LamaImg, Bubble, Speech, BubbleTriangle, BubbleContainer } from './components';

class Lama extends Component {
    render() {
        return(
            <LamaContainer>
            <LamaImg src={this.state.weathermain === "clear sky" ? this.props.happy : this.props.horrified} alt="lama" />
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
        );
    }
}

export default Lama;