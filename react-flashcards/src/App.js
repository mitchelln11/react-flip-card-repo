import React from 'react';
import logo from './logo.svg';
import './App.css';

class CardContent extends React.Component {
  render() {
    return (
      <span>Test Card Content</span>
    )
  }
}

class FlashcardContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   squares: Array(9).fill(null),
    // };
  }

  renderSquare(i) {
    // return <Square value={this.state.squars[i]} />;
  }

  render() {
    return (
      <div class="card">

      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="card"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// ReactDOM.render(
//   <Flashcard />,
//   document.getElementById("card")
// )

export default App;
