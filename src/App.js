import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
import Master from './components/customer/master'
import AdminMaster from './components/admin/AdminMaster'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Provider} from 'react-redux'
import store from './store'
//import css
//%PUBLIC_URL%
import './assets/customer/css/main.css'
import './assets/customer/css/bootstrap.min.css'
import './assets/customer/css/font-awesome.min.css'
import './assets/customer/css/prettyPhoto.css'
import './assets/customer/css/price-range.css'
import './assets/customer/css/animate.css'
import './assets/customer/css/responsive.css'
import { faEdit, faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit, faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane, faPlusCircle, faTrash)

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
            <div>
                <Master/>
            </div>
        </Provider>
        
    );
  }
}

export default App;
