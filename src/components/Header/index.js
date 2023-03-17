import React, { Component } from "react";
import { UserContext, ThemeContext } from "../../contexts";
import styles from './Header.module.scss'

class Header extends Component {
    viewUser = ({firstName}) =>
  render() {
    const {firstName} = this.context;
    return <header className={styles.header}>
        <h1>logo</h1>
        <div>Hi, {firstName}</div>
    </header>;
  }
}



export default Header;
