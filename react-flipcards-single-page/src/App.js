import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.deleteCollection = this.deleteCollection.bind(this);
      this.state = {
          collections: []
      };
  }

  componentDidMount() {
      //const axios = require('axios');
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
  getCollections() {
    const axios = require('axios');
    axios.get('http://localhost:3001/collections')
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }

  postCollection() {
    const axios = require('axios');
    axios.post('http://localhost:3001/collections', {
      title: ''
    })
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }

  putCollection() {
    const axios = require('axios');
    axios.put('http://localhost:3001/collections')
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
  }

  deleteCollection(id) {
    const axios = require('axios');
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
                  <form>
                    <div className="form-group">
                      <label htmlFor="cardTitle">Title:</label>
                      <input type="text" className="form-control" id="cardTitle" aria-describedby="text" placeholder="Enter title definition" />
                      <label htmlFor="cardState">State:</label>
                      <input type="text" className="form-control" id="cardState" aria-describedby="text" placeholder="Enter state definition" />
                      <label htmlFor="cardProps">Props:</label>
                      <input type="text" className="form-control" id="cardProps" aria-describedby="text" placeholder="Enter props definition" />
                      <label htmlFor="cardComponent">Component:</label>
                      <input type="text" className="form-control" id="cardComponent" aria-describedby="text" placeholder="Enter component definition" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      );
  }
}

export default App;