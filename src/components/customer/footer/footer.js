import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render(){
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="https://google.com">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe1.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="https://google.com">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe2.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="https://google.com">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe3.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="https://google.com">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe4.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="address">
                                    <img src="/images/home/map.png" alt="" />
                                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-widget">
                                    <h2>Contact</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="https://google.com"><FontAwesomeIcon icon="map-marker-alt"/>{' '}8901 Marmora Raod, Glasgow, D04 89GR</a></li>
                                        <li><a href="https://google.com"><FontAwesomeIcon icon="phone"/>{' '}Telephone : +012 345 678 102</a></li>
                                        <li><a href="https://google.com"><FontAwesomeIcon icon="globe"/>{' '}Email : info@example.com<br/>Web : www.example.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Service</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="https://google.com">Online Help</a></li>
                                        <li><a href="https://google.com">Contact Us</a></li>
                                        <li><a href="https://google.com">Order Status</a></li>
                                        <li><a href="https://google.com">Change Location</a></li>
                                        <li><a href="https://google.com">FAQ’s</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="https://google.com">T-Shirt</a></li>
                                        <li><a href="https://google.com">Mens</a></li>
                                        <li><a href="https://google.com">Womens</a></li>
                                        <li><a href="https://google.com">Gift Cards</a></li>
                                        <li><a href="https://google.com">Shoes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-widget">
                                    <h2>Get In Touch</h2>
                                    <form action="#" className="contact-form" id="form">
                                        <input id="name" type="text" placeholder="NAME"/>
                                        <input id="email" type="text" placeholder="E-MAIL"/>
                                        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                                        <input id="submit" type="submit" value="Send"/>
                                        <p>Get the most recent updates from our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2013 E-Shopper. All rights reserved.</p>
                            <p className="pull-right">Designed by <span><a target="_blank" rel="noopener noreferrer" href="http://www.themeum.com">Meme :v</a></span></p>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}

export default Footer