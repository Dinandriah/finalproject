import React, { Component } from 'react';

class PlaceForm extends Component {
    render() {
        const place = this.props.place
        return (
            <div key={place._id}>
                <div>{place.city}</div>
                <img src={place.img} width="100" alt="No Img"/>
                </div>
        )
    }
}

export default PlaceForm