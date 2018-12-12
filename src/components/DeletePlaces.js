import React, { Component } from 'react';
import PlacesApi from "../configuration/data"
import Button from '@material-ui/core/Button';
class DeletePlaces extends Component{
    // handleDelete = async (event) => {
    //     const id = `/id/${this.props.data}`
    //     PlacesApi({}, 'DELETE', id)
    // }
    DeletePlaces = async (e) => {
        // e.preventDefault()
        await fetch('http://finapi-env.gsnqvvrdga.us-east-2.elasticbeanstalk.com/places/'+this.props.placeid, 
        {
            method: 'DELETE'
        }
        )
        
        // .then (result => result.json())
        .then (response => console.log('Test'))
        .catch(error => console.error('Error', error))
    }
    render() {
        return (
            
            <form onSubmit={this.DeletePlaces}>
            {/* <Button onClick={this.DeletePlaces}></Button> */}
            <button>Delete</button>
            </form>
        )
    }
}
export default DeletePlaces