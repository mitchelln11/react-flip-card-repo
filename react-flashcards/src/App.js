import React, { Component } from 'react'; // This has to change from out of the box
import Cards from './Components/Cards';

class App extends Component { // Line updated

  state = {
    cards : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }

  render() { // Added
    return (
      <div className="App">
        <h1>First React App</h1>
        <Cards cards={ this.state.cards } />

        {/* Acceptable way of outputting if not using a state, goin one at a time */}
        {/* <Cards name="Ryu" age="25" belt="black" />  */}
      </div>
    );
  }
}

export default App;
