import React, { Component } from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
// import './App.css';
// import Button from '@material-ui/core/Button';
import Master from './components/customer/Master'
import AdminMaster from './components/admin/AdminMaster'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Provider} from 'react-redux'
import store from './store'

import { faEdit, faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit, faEye, faShoppingCart, faSyncAlt, faHeart, faMapMarkerAlt, faPhone, faGlobe, faPaperPlane, faPlusCircle, faTrash)

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
            <BrowserRouter>
              <Switch>
                <Route path="/admin" component={AdminMaster}/>
                <Route path="/" component={Master}/>
              </Switch>
            </BrowserRouter>
        </Provider>
        
    );
  }
}

export default App;
