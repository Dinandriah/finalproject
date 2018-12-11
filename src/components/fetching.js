import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
// import {placesApi} from '../configuration/data';

class Fetching extends Component{
    constructor (props){
        super(props)
        // let place;
        if (props.place){
            // place = this.props.place
            console.log(props.place)
        }
        else {
            console.log("else")
            // place = {'city': '', 'state': '', 'adventure': '', 'date': '', 'img': ''}
        }
        // console.log(place)
        // console.log(this.props.place)
        this.state = {
            city: place.city,
            state: place.state,
            date: place.date,
            img: place.img,
            adventure: place.adventure

        }
    }
    
handlePlaceChange = (id) => (thing) => {
    const newPlace = this.state.place.map ((place, _id)=> {
        if (id !== _id) return place;

        return thing.target.value
    });
    this.setState ({place: newPlace})
}

handleAddPlace = () =>{
    this.setState({
        place: this.state.places.concat ([''])
    })
}
handleRemovePlace = (id) => () => {
    this.setState({
        place: this.state.places.filter((s, _id) => id !== _id)
    })
}
handleSubmit = (evt) => {
    let id = this.props.id
    if (!id){
        id = ''
    }
    placesApi(this.state, this.props.action, id)
}

}