import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
import Master from './components/customer/master'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane)

class App extends Component {
  render() {
    return (
        <div>
            <Master/>
        </div>
    );
  }
}

export default App;
