import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.loadWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
