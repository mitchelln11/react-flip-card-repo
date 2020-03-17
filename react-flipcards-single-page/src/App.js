import React from 'react';
import './App.css';
import axios from 'axios';
import ModalAddCard from './Components/AddCard';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.deleteCollection = this.deleteCollection.bind(this);
      this.state = {
          collections: []
      };
  }

  componentDidMount() {
      let url = "http://localhost:3001/collections"
      fetch(url)
      .then(response => response.json())
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
                                  
                                  <button key={collection.id} className="btn btn-primary" 
                                  onClick={() => this.deleteCollection(collection.id)}>
                                    Delete Card
                                  </button>
                              </div>
                          </div>
                      </div> 
                  </div>
              )
          });
          this.setState({collections: collections});
      });
  }

  componentWillUnmount() {
  }

  
  /* ---------------------CRUD METHODS--------------------------------- */
  // getCollections() {
  //   axios.get('http://localhost:3001/collections')
  //   .then(resp => console.log(resp))
  //   .catch(err => console.error(err));
  // }

  postCollection() {
    axios.post('http://localhost:3001/collections', {
      title: ''
    })
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }

  putCollection(id) {
    axios.put('http://localhost:3001/collections' + id)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }

  deleteCollection(id) {
    return axios.delete('http://localhost:3001/collections/' + id)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }
  /* ---------------------END CRUD METHODS--------------------------------- */


  render() {
      return (
        <div className="App App-header">
          <h1>Hello There</h1>
          
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addCard">
            Add Card
          </button>

          <div className="cards-container">
              {this.state.collections}
          </div>

          {/* Modal */}
          <div className="modal fade" id="addCard" tabIndex="-1" role="dialog" aria-labelledby="addCardlLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addCardlLabel">Add Card</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body">
                  <ModalAddCard />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      );
  }
}

export default App;