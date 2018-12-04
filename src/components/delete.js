import React, { Component } from 'react';
import PlacesApi from "../configuration/data"

class DeletePlace extends Component{
    handleDelete = async (event) => {
        const id = `/id/${this.props.data}`
        PlacesApi({}, 'DELETE', id)
    }
    render() {
        return (
            <form onSubmit={this.handleDelete}>
            <button>Delete</button>
            </form>
        )
    }
}
export default DeletePlace