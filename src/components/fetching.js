import React from 'react';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import {placesApi} from '../configuration/data';

export default class extends React.Component{
    constructor (props){
        super(props)
        let place;
        if (props.place){
            place = props.place
        }
        else {
            place = {'city': '', 'state': '', 'adventure': '', 'date': '', 'img': ''}
        }
        this.state = {
            city: place.city,
            state: place.state,
            date: place.date,
            img: place.img,
            adventure: place.adventure

        }
    }
handlePlaceChange = (id) => (evt) => {
    const newPlace = this.state.place.map ((place, _id)=> {
        if (id !== _id) return place;

        return evt.target.value
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
render (){

  return (
    <div key= "_id">
      <form className="place" onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        placeholder="Image Url" 
        value={this.state.img} 
        onChange={event => this.setState({ img: event.target.value })} 
        />
        {/* {this.state.city.map ((city, id))} */}
          <input 
          type= "text"
          placeholder= {`City name`}
          value= {this.state.city}
          onChange={event => this.setState({city: event.target.value})}/>
          <input
          type= "text"
          placeholder= "State"
          value= {this.state.state}
          onChange={event => this.setState({state: event.target.value})}/>
          <input
          type="text"
          placeholder= "Adventure"
          value= {this.state.adventure}
          onChange={event => this.setState ({adventure: event.target.value})}/>
          <button>Button</button>
        
      </form>
    </div>
  );
};

// export default Place;
    
}
