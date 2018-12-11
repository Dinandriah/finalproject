import React, { Component } from 'react';
// import Fetching from './fetching'

class PlaceForm extends Component {
   constructor(props){
       super(props)
        console.log('form constructor', this.props.place)
        
    }

    state = {
        city: this.props.place.city,
        state: this.props.place.state,
        date: this.props.place.date,
        img: this.props.place.img,
        adventure: this.props.place.adventure,
        id: this.props.place._id
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
        place: this.state.place.concat ([''])
    })
}
handleRemovePlace = (id) => () => {
    this.setState({
        place: this.state.place.filter((s, _id) => id !== _id)
    })
}
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            city: this.props.place.city,
            state: this.props.place.state,
            img: this.props.place.img,
            adventure: this.props.place.adventure,
            date: this.props.place.date
        }
        )
        
    }
    render() {
        console.log('form', this.state.city)
        return(
     <form className="place" onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            placeholder="Image Url" 
            value={this.state.img} 
            onChange={event => this.setState({img: event.target.value})} 
            />
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
            <input
            type="text"
            placeholder= "Date"
            value= {this.state.date}
            onChange={event => this.setState ({date: event.target.value})}/>
            <button>Button</button>
        
      </form>
        )
    }
}

export default PlaceForm
