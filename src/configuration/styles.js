import React, { Component } from 'react';
import './styles.css'
class PageStyle extends Component{
    render() {
        return (
            <div className='page'>
                <div className = "center">
                    <header className = "theme">A collection of Adventures my family has experienced</header>
                <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default PageStyle