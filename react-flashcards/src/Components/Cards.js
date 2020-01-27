import React, { Component } from 'react';

class Cards extends Component {
    componentDidMount() {
        fetch('./././data.json') // asynchronous, creates a promise
        .then(res => { // Gets response from above call ^^
          return res.json(); // Returns in json format
        })
        .then(data => {
          console.log(data)
        })
    }

    render() {
        // Below example coming from React series from The Net Ninja Youtube channel
        // const cards = this.props;
        const cardList = this.props.cards.map(card => { // List referencing the const above ^^
            return (
                <div className="card" key={ card.id } >
                    {/* Must reference card from map cardList above to do a for each */}
                    <div>Name: { card.name }</div>
                    <div>Age: { card.age }</div>
                    <div>Belt: { card.belt }</div>
                </div>
            )
        })
        // This method below called destructuring
        // const { name, age, belt} = this.props; // Store name, age, and belt in variables called name, age, belt
        return(
            <div className="card-list">
                { cardList }
            </div>
        //     // <div className="card">
        //     //     {/* Below is WITH desstructuring from const above ^^ */}
        //     //     {/* <div>Name: {name}</div>
        //     //     <div>Age: {age}</div>
        //     //     <div>Belt: {belt}</div> */}

        //     //     {/* Below is an acceptable form of outputting data, but this is without destructuring */}
        //     //     {/* <div>Name: {this.props.name}</div>
        //     //     <div>Age: {this.props.age}</div>
        //     //     <div>Belt: {this.props.belt}</div> */}
        //     // </div>
        )
    }
}

export default Cards