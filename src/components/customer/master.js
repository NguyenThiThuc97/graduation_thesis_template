import React, {Component} from 'react'
import Header from './Header/Header'
import Home from './Content/Home/Home'
import Footer from './Footer/Footer'
import Contact from './Content/Contact/Contact'

export default class Master extends Component{
    render(){
        return(
            <div>
                <div className="preloader">
                    <div className="loading-center">
                        <div className="loading-center-absolute">
                            <div className="object object_one"></div>
                            <div className="object object_two"></div>
                            <div className="object object_three"></div>
                        </div>
                    </div>
                </div>
                        {/* <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p> */}
            
                <div className="as-mainwrapper">
                    <div className="bg-white">
                        {/* <!-- header start --> */}
                            <Header/>
                        {/* <!-- header end --> */}
                            <Home/>
                            {/* <!-- client area start --> */}
                            <div className="client-area ptb-90">
                                <div className="container">
                                    <div className="row">
                                        <div className="client-owl">
                                            <div className="row">

                                            </div>
                                            <div className="col-xs-3">
                                                <div className="single-client">
                                                    <div className="single-client-img plr-40">
                                                        <a href="#"><img src={process.env.PUBLIC_URL + "img/client/1.png"} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-3">
                                                <div className="single-client">
                                                    <div className="single-client-img plr-40">
                                                        <a href="#"><img src={process.env.PUBLIC_URL + "img/client/2.png"} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-3">
                                                <div className="single-client">
                                                    <div className="single-client-img plr-40">
                                                        <a href="#"><img src={process.env.PUBLIC_URL + "img/client/3.png"} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-3">
                                                <div className="single-client">
                                                    <div className="single-client-img plr-40">
                                                        <a href="#"><img src={process.env.PUBLIC_URL + "img/client/4.png"} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="client-button text-center pt-35">
                                                <a href='#' className='section-button'>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- client area end --> */}
                            {/* <!-- service area end --> */}
                            <div className="service-area mb-10">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="single-service text-center">
                                                <div className="single-service-content ptb-40">
                                                    <div className="single-service-icon-wrapper">
                                                        <div className="single-service-icon">
                                                            <img src={process.env.PUBLIC_URL + "img/icon/5.png"} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="single-service-info">
                                                        <h4 className="text-uppercase">free shipping</h4>
                                                        <p>Free for all product</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="single-service text-center">
                                                <div className="single-service-content ptb-40">
                                                    <div className="single-service-icon-wrapper">
                                                        <div className="single-service-icon">
                                                            <img src={process.env.PUBLIC_URL + "img/icon/7.png"} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="single-service-info">
                                                        <h4 className="text-uppercase">order online</h4>
                                                        <p>www.shofixe.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="single-service text-center">
                                                <div className="single-service-content ptb-40">
                                                    <div className="single-service-icon-wrapper">
                                                        <div className="single-service-icon">
                                                            <img src={process.env.PUBLIC_URL + "img/icon/9.png"} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="single-service-info">
                                                        <h4 className="text-uppercase">money back</h4>
                                                        <p>money back guarantee</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 hidden-sm col-xs-12">
                                            <div className="single-service text-center">
                                                <div className="single-service-content ptb-40">
                                                    <div className="single-service-icon-wrapper">
                                                        <div className="single-service-icon">
                                                            <img src={process.env.PUBLIC_URL + "img/icon/10.png"} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="single-service-info">
                                                        <h4 className="text-uppercase">gift coupon</h4>
                                                        <p>surprise gift coupon</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- service area end --> */}
                            {/* <!-- touch area end --> */}
                            <div className="touch-area ptb-90">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 col-xs-12">
                                            <div className="touch-left">
                                                <div className="touch-logo mb-35">
                                                    <a href="index.html"><img src={process.env.PUBLIC_URL + "img/logo/2.png"} alt="shofixe"/></a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod tempor incididunt ut ore dolore magna aliqua. Ut enim ad minim eniam</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod tempor incididunt ut</p>
                                                <div className="social-icon">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <div className="touch-right">
                                                <h2 className="text-uppercase">get in touch</h2>
                                                <form id="contact-form-two" action="mail.php" method="post">
                                                    <input type="text" placeholder="Your name here..." name="name"/>
                                                    <input type="text" placeholder="Your email here..." name="email"/>
                                                    <textarea className="mtb-25" cols="30" rows="10" placeholder="Write message here..." name="message"></textarea>
                                                    <button className="section-button" type="submit">send</button>
                                                </form>
                                                <p className="form-message"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- touch area end --> */}
                        {/* <!-- footer start --> */}
                        <Footer/>
                        {/* <!-- footer end --> */}
                    </div>
                </div>
            
                <div id="quickview-wrapper">
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="productModal" tabindex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-product">
                                        <div className="product-images">
                                            <div className="main-image images">
                                                <img alt="" src={process.env.PUBLIC_URL + "img/product/static2.jpg"}/>
                                            </div>
                                        </div>{/*<!-- .product-images -->*/}
            
                                        <div className="product-info">
                                            <h1>Diam quis cursus</h1>
                                            <div className="price-box">
                                                <p className="price"><span className="special-price"><span className="amount">$132.00</span></span></p>
                                            </div>
                                            <a href="shop.html" className="see-all">See all features</a>
                                            <div className="quick-add-to-cart">
                                                <form method="post" className="cart">
                                                    <div className="numbers-row">
                                                        <input type="number" id="french-hens" value="3"/>
                                                    </div>
                                                    <button className="single-add-to-cart-button" type="submit">Add to cart</button>
                                                </form>
                                            </div>
                                            <div className="quick-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                                            </div>
                                            <div className="social-sharing">
                                                <div className="widget widget_socialsharing_widget">
                                                    <h3 className="widget-title-modal">Share this product</h3>
                                                    <ul className="social-icons">
                                                        <li><a target="_blank" title="Facebook" href="#" className="facebook social-icon"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a target="_blank" title="Twitter" href="#" className="twitter social-icon"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="fa fa-pinterest"></i></a></li>
                                                        <li><a target="_blank" title="Google +" href="#" className="gplus social-icon"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a target="_blank" title="LinkedIn" href="#" className="linkedin social-icon"><i className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .product-info --> */}
                                    </div>
                                    {/* <!-- .modal-product --> */}
                                </div>
                                {/* <!-- .modal-body --> */}
                            </div>
                            {/* <!-- .modal-content --> */}
                        </div>
                        {/* <!-- .modal-dialog --> */}
                    </div>
                    {/* <!-- END Modal --> */}
                </div>
            </div>
        )
    }
}