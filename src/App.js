import React from "react";

// import {Component} from "react";
import calculator from './Screens/calculator';

class App extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <calculator/>
      </div>
    )
  }
}

export default App;
