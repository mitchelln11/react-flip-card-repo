import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: 'Front Side of Card'}
    this.update = this.update.bind(this)
  }

  update( e ) {
    this.setState({txt: 'Back Side of Card'})
  }

  render(){
    return (
      <div className="flipcard-outer">
        <div className="card-content">
          <h1>{this.state.txt}</h1>
          <button onClick={this.update}>Test Button</button>
        </div>
      </div>
      
    )
  }
}

export default App