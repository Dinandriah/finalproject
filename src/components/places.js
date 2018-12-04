import React, { Component, Fragment } from 'react';
// import Fetching from './fetching'
import PlaceForm from "./update"
class places extends Component {
    render (){
        const places = this.props.data.map(places => <PlaceForm place={place}/>)
        return(
            <Fragment>
                {places}
            </Fragment>
        )
    }
}
export default places