import React, { Component } from 'react';
import Fetching from '../components/fetching'
import PageStyle from '../configuration/styles'

class Homepage extends Component {
    state = {
        places: []
    }
    getPlaces = async () => {
        await fetch('http://127.0.0.1:3000/places')
        .then (result => result.json())
        .then (data => this.setState ({places: data}))
        console.log (this.state.places)
    }
    componentDidMount = async () => {
        await this.getPlaces()
    }
    render () {
        return (
            <PageStyle>
                <Fetching></Fetching>
            </PageStyle>
        )
    }
}
export default Homepage