import React, { Component, Fragment } from 'react';
// import Fetching from './fetching'
// import PlaceForm from "./placeform"
import MediaCard from '../components/card'

class Places extends Component {
    render (){
    const Places = this.props.data.map(Places => {console.log('inside map'); return <MediaCard places={Places}/>})
        console.log('Places',  this.props.data)
        console.log(this.props, 'props')
        return(
            <Fragment>
                {Places}
            </Fragment>
        )
    }
}
export default Places