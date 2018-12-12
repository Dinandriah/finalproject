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
  

class UpdatePlaces extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            places:{
            city: this.props.places.city,
            state: this.props.places.state,
            date: this.props.places.date,
            img: this.props.places.img,
            adventure: this.props.places.adventure,
            // _id: ''
            }
        }
        console.log('in update', this.props)
      };
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    UpdatePlaces = async (e) => {
        // e.preventDefault()
        // const statedata = {
        //     city: this.state.places.city,
        //     state: this.state.places.state,
        //     img: this.state.places.img,
        //     date: this.state.places.date,
        //     adventure: this.state.places.adventure}
        await fetch(`http://finapi-env.gsnqvvrdga.us-east-2.elasticbeanstalk.com/places/`+this.props.places._id,
        
    {
        method: 'PATCH',
        body: JSON.stringify(this.state.places),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then(result => console.log('result',result))
    .then(response => (console.log('Got it', JSON.stringify(response), response)))
    .catch(error => (console.error('Error', error)))
  }

  render() 
  { const { classes } = this.props;
   return (
       <div>
           
       <Button variant="h8" onClick={this.handleOpen}>Update</Button>
       <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         open={this.state.open}
         onClose={this.handleClose}
       >
         <div style={getModalStyle()} className={classes.paper}>
         
         <form className="place" onSubmit={this.UpdatePlaces}>
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

UpdatePlaces.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  const UpdatePlacesWrapped = withStyles(styles)(UpdatePlaces);
  

export default UpdatePlacesWrapped

