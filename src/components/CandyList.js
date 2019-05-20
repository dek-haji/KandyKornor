import React, { Component } from 'react';

class CandyList extends Component {
    render() {
        console.log(this.props.candies)
        return (
            <section className="candies">
            <h1>candies</h1>
                {
                    this.props.candies.map(candy =>
                    <div key={candy.id}>
                            candy name: {candy.candyName}
                            <p>{candy.candyType}</p>
                </div>
                )
           }
            </section>
        );
    }
}

export default CandyList;
