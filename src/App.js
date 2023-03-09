import React from "react";
import "./App.css";


const App = (props) => {
  return (
    <>
      <button onClick={()=>window.close()}>close</button>
      <button onClick={()=>window.open('https://www.w3schools.com/js/js_window.asp')}>open w3 school</button>
      <button onClick={()=>window.location.assign('https://www.w3schools.com')}>assign</button>
      <button onClick={()=>window.location.replace('https://www.google.com')}>replace</button>
      <button onClick={()=>window.location.reload()}>reload</button>
    </>
  );
};

export default App;
