import React, { Component } from "react";


class Timer extends Component {
    componentDidMount(){
        this.timer = setInterval(this.ticker,1000)

    }
    ticker(){
        this.setState({clock: new Date() - this.props.start})
    }

    constructor(props){
        super(props);

        this.state = {
            clock: 0
        };
        this.ticker = this.ticker.bind(this);
    }
    render() {
        var clock = Math.round(this.state.clock/1000);
        //console.log(this.props.start);
      return (
        <div className="App">
         
            <p>Stop Watch</p> <br/>
            <span>{clock}</span>
            <p>Seconds</p>
            
        </div>
      );
    }
  }
  
  export default Timer;
  