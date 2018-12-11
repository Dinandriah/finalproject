import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });
  
class AddPlaces extends Component{
    constructor(){
    super()

    this.state = {
        open: false,
        places:{
        city: '',
        state: '',
        date: '',
        img: '',
        adventure: '',
        // _id: ''
        }
  };
    }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  AddPlaces = async (e) => {
    e.preventDefault()
    await fetch('http://127.0.0.1:3000/places',
    {
        method: 'POST',
        body: JSON.stringify(this.state.places),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then(result => result.json())
    // .then(response => (console.log(response)))
    .then(response => (console.log('Got it', JSON.stringify(response), response)))
    .catch(error => (console.error('Error', error)))
  }

  render() 
   { const { classes } = this.props;
    return (
        <div>
            
        <Button variant="h15" onClick={this.handleOpen}>Add New Adventure</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          
          <form className="place" onSubmit={this.AddPlaces}>
            <input 
            type="text" 
            placeholder="Image Url" 
            defaultValue={this.state.places.img} 
            onChange={event => this.setState({places: { ...this.state.places, img: event.target.value}})} 
            />
            <input 
            type= "text"
            placeholder= {`City name`}
            defaultValue= {this.state.places.city}
            onChange={event => this.setState({places: { ...this.state.places, city: event.target.value}})} />
            <input
            type= "text"
            placeholder= "State"
            defaultValue= {this.state.places.state}
            onChange={event => this.setState({places: { ...this.state.places, state: event.target.value}})} />
            <input
            type="text"
            placeholder= "Adventure"
            defaultValue= {this.state.places.adventure}
            onChange={event => this.setState ({places: { ...this.state.places, adventure: event.target.value}})} />
            <input
            type="text"
            placeholder= "Date"
            defaultValue= {this.state.places.date}
            onChange={event => this.setState({places: { ...this.state.places, date: event.target.value}})} />
            {/* <input
            type="number"
            placeholder= "ID"
            defaultValue= {this.state.places._id}
            onChange={event => this.setState({places: { ...this.state.places, _id: event.target.value.parseInt}})} /> */}
            <button>Button</button>
        
      </form>
      {/* <p>{this.state.places}</p> */}
           <Button onClick={this.handleClose}>Close Modal</Button>
          </div>
        </Modal>
      </div>
    )
}
}

AddPlaces.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  const AddPlacesWrapped = withStyles(styles)(AddPlaces);
  

export default AddPlacesWrapped