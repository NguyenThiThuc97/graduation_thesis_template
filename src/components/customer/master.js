import React, { Component } from 'react'
import Header from './header/header'
import Content from './content/index'
import Footer from './footer/footer'

//import css
//%PUBLIC_URL%
import '../../css/main.css'
import '../../css/bootstrap.min.css'
import '../../css/font-awesome.min.css'
import '../../css/prettyPhoto.css'
import '../../css/price-range.css'
import '../../css/animate.css'
import '../../css/responsive.css'

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