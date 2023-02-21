import React, { Component } from "react";

class Ciao extends Component {
  render() {
    const { classStyle, name, isHi } = this.props;
    // const word = isHi ? 'hi' : 'bye';
    return <h2 className={classStyle}>{isHi ? 'hi' : 'bye'}, {name ? name : "anonim"}</h2>;
  }
}

export default Ciao;
