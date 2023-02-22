import React, { Component } from 'react';

class HeadingH1 extends Component {
    render() {
        // const {className, title, content} = this.props;
        return (
            <h1 className="heading" title="React">
        Hi, React! {Math.random()}
      </h1>
        );
    // return React.createElement('h1',{className: className}, content)
    }
}

export default HeadingH1;
