import React, { Component } from 'react';
// import Fetching from '../components/fetching'
import PageStyle from '../configuration/styles'
import Places from '../components/places'
import MediaCard from '../components/card'
import ButtonAppbar from '../components/Appbar'

class Homepage extends Component {
    // super (props){}
    state = {places: []}
    getPlaces = async () => {
        await fetch('http://127.0.0.1:3000/places')
        .then (result => result.json())
        .then (data => {console.log('then', data); this.setState ({places: data}); })
        console.log ('data', this.state.places)
    }
    componentDidMount = async () => {
        console.log('Comp Mounted')
        await this.getPlaces()
    }
    render () {
        console.log('home', this.state.places._id)
        return (
            
            <PageStyle>
                <ButtonAppbar/>
                <Places data={this.state.places}/>
                
            </PageStyle>
            // <MediaCard places={this.state.places}>
                // {/* <Places /> */}
            // </MediaCard>
        )
        
    }
}
export default Homepage