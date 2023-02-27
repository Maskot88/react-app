import React, { Component } from 'react';
// import styles from "./StopWatch2.style.module.css";

class StopWatch2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(0, 0, 0, 0, 0, 0, 0),
      };
      this.idTimeout = null;
    }
  
    tick = () => {
      this.stop();
      this.setState((state, props) => {
        const { time } = state;
        const newTime = new Date(time.getTime());
        newTime.setSeconds(newTime.getSeconds() + 1);
        return { time: newTime };
      });
      this.start();
    };
  
    start = () => {
      if (this.idTimeout === null) {
        this.idTimeout = setTimeout(this.tick, 1000);
      }
    };
  
    stop = () => {
      clearTimeout(this.idTimeout);
      this.idTimeout = null;
    };
  
    resume = () => {
      this.stop();
      this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
      this.start();
    };
  
    componentWillUnmount() {
      this.stop();
    }
  
    render() {
      const { time } = this.state;
  
      return (
        <article>
          <h2>{time.toLocaleTimeString("en-GB")}</h2>
          <div >
            <button  onClick={this.start}>
              start
            </button>
            <button  onClick={this.stop}>
              stop
            </button>
            <button  onClick={this.resume}>
              resume
            </button>
          </div>
        </article>
      );
    }
  }

export default StopWatch2;
