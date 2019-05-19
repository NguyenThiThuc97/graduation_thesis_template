import React, { Component } from 'react'
import Header from './header/header'
import Content from './content/index'
import Footer from './footer/footer'


class MasterPage extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default MasterPage