import React from 'react';
import '../App.css';
import axios from 'axios';

// Once working, you can delete the App.js on the root
class ModalAddCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange = event => { --Same as below --> This way might allow the word this
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ 
            [name]: value
            // title: event.target.value,
            // cardState: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const cards = {
        title: this.state.title,
        cardState: this.state.cardState
    };

    axios.post(`http://localhost:3001/collections`, {
        id: '',    
        title: cards.title,
        cards: [{
            id: '',
            word: cards.cardState,
            definition: ''
        }]
    })
    .then(resp => {
            console.log(resp);
            console.log(resp.data);
        })
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="cardTitle">Title:</label>
                <input type="text" className="form-control" name="title" id="cardTitle" aria-describedby="text" placeholder="Enter title definition" onChange={this.handleChange} />
                <label htmlFor="cardState">State:</label>
                <input type="text" className="form-control" name="cardState" id="cardState" aria-describedby="text" placeholder="Enter state definition" onChange={this.handleChange} />
                {/* <label htmlFor="cardComponent">Component:</label>
                <input type="text" className="form-control" id="cardComponent" aria-describedby="text" placeholder="Enter component definition" onChange={this.handleChange} /> */}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        );
    }
}

export default ModalAddCard;