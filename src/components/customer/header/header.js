import React, {Component} from 'react'

export default class Header extends Component{
    render(){
        return(
            <header className="header-area">
                <div className="header-top-area ptb-10 hidden-sm hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="account-usd text-left">
                                    <ul>
                                        <li><a href="account.html">My Account <i className="fa fa-angle-down"></i></a>
                                            <ul className="submenu-mainmenu">
                                                <li><a href="#"><i className="fa fa-circle"></i>Login</a></li>
                                                <li><a href="account.html"><i className="fa fa-circle"></i>My Account</a></li>
                                                <li><a href="wishlist.html"><i className="fa fa-circle"></i>My Wishlist</a></li>
                                                <li><a href="cart.html"><i className="fa fa-circle"></i>My Cart</a></li>
                                                <li><a href="checkout.html"><i className="fa fa-circle"></i>Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="currency"><a href="#">USD <i className="fa fa-angle-down"></i></a>
                                            <ul className="submenu-mainmenu">
                                                <li><a href="#"><i className="fa fa-dollar"></i>USD</a></li>
                                                <li><a href="#"><i className="fa fa-euro"></i>EURO</a></li>
                                                <li><a href="#"><i className="fa fa-gbp"></i>GBP</a></li>
                                            </ul>
                                        </li>
                                        <li className="language"><a href="#"><img src={process.env.PUBLIC_URL + 'img/icon/eng.png'} alt=""/>English <i className="fa fa-angle-down"></i></a>
                                            <ul className="submenu-mainmenu">
                                                <li><a href="#"><img src={process.env.PUBLIC_URL + 'img/icon/eng.jpg'} alt=""/>English</a></li>
                                                <li><a href="#"><img src={process.env.PUBLIC_URL + 'img/icon/ger.jpg'} alt=""/>German</a></li>
                                                <li><a href="#"><img src={process.env.PUBLIC_URL + 'img/icon/fren.jpg'} alt=""/>French</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="social-icons text-center">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="top-right">
                                    <div className="top-login-cart">
                                        <ul>
                                            <li className=" hidden-xs"><a href="account.html">Login or Register</a></li>
                                            <li className=" hidden-xs"><a href="checkout.html">Checkout</a></li>
                                            <li><a href="cart.html"><img src={process.env.PUBLIC_URL + 'img/icon/cart_red.png'} alt="cart"/>Cart (3)</a>
                                                <ul className="submenu-mainmenu">
                                                    <li className="single-cart-item clearfix">
                                                        <span className="cart-img">
                                                            <a href="#"><img src={process.env.PUBLIC_URL + 'img/cart/1.jpg'} alt=""/></a>
                                                        </span>
                                                        <span className="cart-info">
                                                            <a href="#">Eletria ostma</a>
                                                            <span>$150 x 2</span>
                                                        </span>
                                                        <span className="trash-cart">
                                                            <a href="#"><i className="fa fa-trash-o"></i></a>
                                                        </span>
                                                    </li>
                                                    <li className="single-cart-item clearfix">
                                                        <span className="cart-img">
                                                            <a href="#"><img src={process.env.PUBLIC_URL + 'img/cart/2.jpg'} alt=""/></a>
                                                        </span>
                                                        <span className="cart-info">
                                                            <a href="#">Celletria ostma</a>
                                                            <span>$120 x 1</span>
                                                        </span>
                                                        <span className="trash-cart">
                                                            <a href="#"><i className="fa fa-trash-o"></i></a>
                                                        </span>
                                                    </li>
                                                    <li className="single-cart-item clearfix">
                                                        <span className="cart-img">
                                                            <a href="#"><img src={process.env.PUBLIC_URL + 'img/cart/3.jpg'} alt=""/></a>
                                                        </span>
                                                        <span className="cart-info">
                                                            <a href="#">Pelletria ostma</a>
                                                            <span>$100 x 2</span>
                                                        </span>
                                                        <span className="trash-cart">
                                                            <a href="#"><i className="fa fa-trash-o"></i></a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="sub-total-cart text-center">
                                                            Sub Total <span>$620</span>
                                                            <a href="cart.html" className="view-cart active">View Cart</a>
                                                            <a href="checkout.html" className="view-cart">Checkout</a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-info-area ptb-35">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="header-logo">
                                    <a href="index.html"><img src={process.env.PUBLIC_URL + 'img/logo/1.png'} alt="shofixe"/></a>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm hidden-xs">
                                <div className="info">
                                    <div className="info-icon">

                                    </div>
                                    <div className="info-text">
                                        <h4>+88 (012) 564 979 56</h4>
                                        <p>We are open 9 am - 10pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm hidden-xs">
                                <div className="info">
                                    <div className="info-icon">

                                    </div>
                                    <div className="info-text">
                                        <h4>info@shofixe.com</h4>
                                        <p>You can mail us</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="search-box">
                                    <img src={process.env.PUBLIC_URL + 'img/icon/search.png'} alt=""/>
                                    <form action="#">
                                        <input type="text" placeholder="Search..."/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenu-area text-center hidden-sm hidden-xs">
                    <nav>
                        <div className="mainmenu">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html">Features</a></li>
                                <li className="shop"><a href="shop-grid-right-sidebar.html">Shop</a>
                                    <ul className="submenu-mainmenu">
                                        <li><a href="shop.html"><i className="fa fa-circle"></i>Shop</a></li>
                                        <li><a href="product-details.html"><i className="fa fa-circle"></i>Product Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Men</a></li>
                                <li className="dropdown"><a href="shop.html">Pages</a>
                                    <ul className="submenu-mainmenu">
                                        <li><a href="cart.html"><i className="fa fa-circle"></i>Cart</a></li>
                                        <li><a href="checkout.html"><i className="fa fa-circle"></i>Checkout</a></li>
                                        <li><a href="contact.html"><i className="fa fa-circle"></i>Contact</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* <!-- Mobile Menu Area start --> */}
                <div className="mobile-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="mobile-menu">
                                    <nav id="dropdown">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="index.html">Features</a></li>
                                            <li className="shop"><a href="shop-grid-right-sidebar.html">Shop</a>
                                                <ul className="submenu-mainmenu">
                                                    <li><a href="shop.html"><i className="fa fa-circle"></i>Shop</a></li>
                                                    <li><a href="product-details.html"><i className="fa fa-circle"></i>Product Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Men</a></li>
                                            <li className="dropdown"><a href="shop.html">Pages</a>
                                                <ul className="submenu-mainmenu">
                                                    <li><a href="cart.html"><i className="fa fa-circle"></i>Cart</a></li>
                                                    <li><a href="checkout.html"><i className="fa fa-circle"></i>Checkout</a></li>
                                                    <li><a href="contact.html"><i className="fa fa-circle"></i>Contact</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile Menu Area end --> */}
            </header>
        )
    }
}