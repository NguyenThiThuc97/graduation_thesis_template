import React, {Component} from 'react'
// import Shop from './shop'
import Home from './Home/home'
import HomeSlider from './Home/HomeSlider'
// import ProductDetail from './ProductDetail/ProductDetail'

class Content extends Component {
    render(){
        return(
            <div>
                <HomeSlider/>
                <Home/>
                {/* <ProductDetail/> */}
            </div>
        )
    }
}

export default Content