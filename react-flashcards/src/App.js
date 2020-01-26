import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    cards: [],
  };

  // constructor(){
  //   super();
  //   this.state = {txt: 'Front Side of Card'}
  //   this.update = this.update.bind(this)
  // }

  // update( e ) {
  //   this.setState({txt: 'Back Side of Card'})
  // }

  componentDidMount() {
    // Axios is promise-based
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res)
      this.setState({ cards: res.data });
    })
  }

  render(){
    return (
      <div className="flipcard-outer">
        <div className="card-content">
          <ul>
              {this.state.cards.map(card => <li>{card.name}</li>)}
          </ul>
        </div>
      </div>
      
    )
  }
}

export default App