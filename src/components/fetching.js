import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {placesApi} from '../configuration/data';

export default class extends React.Component{
    constructor (props){
        super(props)
        let places;
        if (props.places){
            places = props.places
        }
        else {
            places = {'city': '', 'state': '', 'adventure': '', 'date': '', 'img': ''}
        }
        this.state = {
            city: places.city,
            state: places.state,
            date: places.date,
            img: places.img,
            adventure: places.adventure

        }
    }
handlePlaceChange = (id) => (event) => {
    const newPlace = this.state.place.map ((place, _id)=> {
        if (id !== _id) return place;

        return event.target.value
    });
    this.setState ({place: newPlace})
}

handleAddPlace = () =>{
    this.setState({
        place: this.state.place.concat ([''])
    })
}
handleRemovePlace = (id) => () => {
    this.setState({
        place: this.state.place.filter((s, _id) => id !== _id)
    })
}
handleSubmit = (evt) => {
    let thing = this.props.thing
    if (!thing){
        thing = ''
    }
    placesApi(this.state, this.props.action, thing)
}
render (){

  return (
    <div>
      <Card className="place" onSubmit={this.handleSubmit}>
        <CardImg 
        type="text" 
        placeholder="Image Url" 
        value={this.state.img} 
        onChange={event => this.setState({ img: event.target.value })} 
        />
        <CardBody>
          <CardTitle 
          type= "text"
          placeholder= "City"
          value= {this.state.city}
          onChange={event => this.setState ({city: event.target.value})}/>
          <CardSubtitle
          type= "text"
          placeholder= "State"
          value= {this.state.state}
          onChange={event => this.setState({state: event.target.value})}/>
          <CardText
          type="text"
          placeholder= "Adventure"
          value= {this.state.adventure}
          onChange={event => this.setState ({adventure: event.target.value})}/>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

// export default Place;
    
}
