import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const handleAddPlace = () =>{
    this.setState({
        place: this.state.places.concat ([''])
    })
}
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

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Add Place</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
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
           <Button onClick={this.handleClose}>Close Modal</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;