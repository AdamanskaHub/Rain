import React, { Component } from 'react';

class Form extends Component {
    // eslint-disable-next-line
    render() {
        return(
            <form onSubmit = {this.props.getWeather}>
                <input type="text" name="city" placeholder="City here" />
                <input type="text" name="country" placeholder="Country here" />
                <button >Grab weather</button>
            </form>
        );
    }
}

export default Form;