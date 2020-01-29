import React, { Component } from 'react';

class Cards extends Component {
    // componentDidMount() {
    //     fetch('./././data.json') // asynchronous, creates a promise
    //     .then(res => { // Gets response from above call ^^
    //       return res.json(); // Returns in json format
    //     })
    //     .then(data => {
    //       console.log(data)
    //     })
    // }

    state = {
        cards: []
    }

    componentDidMount() {
        let currentComponent = this; // Need to declare this before using inside of an axios get call
        const axios = require('axios');
        axios.get('http://localhost:3000/collections')
        .then(function (res) {
            console.log(res)
            console.log(res.data)
            console.log(res.data[2].title)
            currentComponent.setState({
                cards: res.data
            })
        });
        
    }

    render() {
        const { cards } = this.state;
        const cardList = cards.length ? (
            cards.map(card => {
                return (
                <div className="card" key={card.id}>
                    <h2 className="card-title">{card.title}</h2>
                </div>
                )
            })
            ) : (<div className="center">No info available</div> )

        return (
            <div className="card-container">
                {cardList}
            </div>
        )
    }


    // render() {
    //     // Below example coming from React series from The Net Ninja Youtube channel
    //     // const cards = this.props;
    //     const cardList = this.props.cards.map(card => { // List referencing the const above ^^
    //         return (
    //             <div className="card" key={ card.id } >
    //                 {/* Must reference card from map cardList above to do a for each */}
    //                 <div>Title: { card.title }</div>
    //                 <div>Word: { card.cards.word }</div>
    //                 <div>Description: { card.cards.definition }</div>
    //             </div>
    //         )
    //     })
    // }
    //     // This method below called destructuring
    //     // const { name, age, belt} = this.props; // Store name, age, and belt in variables called name, age, belt
    //     return(
    //         <div className="card-list">
    //             { cardList }
    //         </div>
    //     );
    //     //     // <div className="card">
    //     //     //     {/* Below is WITH destructuring from const above ^^ */}
    //     //     //     {/* <div>Name: {name}</div>
    //     //     //     <div>Age: {age}</div>
    //     //     //     <div>Belt: {belt}</div> */}

    //     //     //     {/* Below is an acceptable form of outputting data, but this is without destructuring */}
    //     //     //     {/* <div>Name: {this.props.name}</div>
    //     //     //     <div>Age: {this.props.age}</div>
    //     //     //     <div>Belt: {this.props.belt}</div> */}
    //     //     // </div>
    //     // )
    // // }
}

export default Cards