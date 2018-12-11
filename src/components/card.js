import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomePage from '../pages/home'
import DeletePlaces from './DeletePlaces'
import UpdatePlacesWrapped from './UpdatePlaces'

const handlePlaceChange = (id) => (thing) => {
    const newPlace = this.state.place.map ((place, _id)=> {
        if (id !== _id) return place;

        return thing.target.value
    });
    this.setState ({place: newPlace})
}


const handleRemovePlace = (id) => () => {
    this.setState({
        place: this.state.places.filter((s, _id) => id !== _id)
    })
}

const styles = {
  card: {
    maxWidth: 45,
  },
  media: {
    height: 10,
  },
};

function MediaCard(props) {
  const { classes } = props;
  console.log(props)
  console.log(props.places._id)
  return (
    <Card className={
      classes.places
      }>
      <CardActionArea>
        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
          className="image"
          image={props.places.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.places.city},{props.places.state}
          </Typography>
          <Typography component="p">
            {props.places.adventure}
          </Typography>
          <Typography component="p">
            {props.places.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" {...handlePlaceChange()}>
          Edit Adventure
        </Button> */}
        {/* <Button size="small" color="primary"{...handleRemovePlace()}>
          Delete Adventure
        </Button> */}
        <UpdatePlacesWrapped 
        // placeid={props.places._id}
        places={props.places}
        />
        <DeletePlaces 
        placeid={props.places._id}
        
        />
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);