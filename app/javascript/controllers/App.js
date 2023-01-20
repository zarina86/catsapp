import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './Clock';
import Count from './Count';
import Counter from "./Counter";

export default function App() {
  let style = {
    border: "1px solid red",
    padding: "1rem"
  }

  return (
    <div style={style}>
      <h1>This is a React App!</h1>
      <p>This are some react counters!</p>

      <Counter />
    </div>
  );
}

//const App = () => {
  //return (
    //<BrowserRouter>
      //<Routes>
        //<Route  exact path="/clock" component={Clock} />
        //<Route  exact path="/count" component={Count} />
      //</Routes>
    //</BrowserRouter>
 // )};

//export default App;