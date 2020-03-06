import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        collections: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/collections"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let collections = data.map((collection) => {
            return (
                <div key={collection.id} className="cards">
                    <div className="cards-inner">
                        <div className="card-front">
                            <h3>{collection.title}</h3>
                        </div>
                        <div className="card-back">
                            <div>
                                {collection.cards.map((words) =>
                                <p key={words.id}>
                                    <strong>{words.word}</strong>
                                    <span>{words.definition}</span>
                                </p>
                                )}
                            </div>
                        </div>
                    </div> 
                </div>
            );
        });
        this.setState({collections: collections});
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App App-header">
        <h1>Hello There</h1>
        <div className="cards-container">
            {this.state.collections}
        </div>
      </div>
    );
  }
}

export default App;
