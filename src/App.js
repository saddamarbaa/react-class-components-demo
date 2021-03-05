import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const incrrect = {
  color: "red",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      response: "",
      incrrect: false,
    };
  }

  render() {
    return (
      <div className="app">
        <div id="problem" style={incrrect}>
          {this.state.num1} + {this.state.num2}
        </div>
        <input
          type="text"
          value={this.state.response}
          onChange={this.updateResponse}
          onKeyPress={this.inputKeyPress}
        />
      </div>
    );
  }

  updateResponse = (event) => {
    this.setState({ response: event.target.value });
  };

  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(event.target.value);
      const sum = this.state.num1 + this.state.num2;

      if (answer === sum) {
        this.setState({
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: "",
        });
      } else {
        this.setState({
          response: "",
          incrrect: true,
        });
      }
    }
  };
}

export default App;
