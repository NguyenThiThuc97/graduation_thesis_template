import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductItem extends Component{
    render(){
        return (
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <img src="images/home/product1.jpg" alt="" />
                    </div>
                    <div className="product-overlay">
                        <div className="overlay-content">
                            <p>Product Description</p>
                            <ul id="menu">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-3">
                                        <li><a href="https://www.google.com/"><FontAwesomeIcon icon="eye" /></a></li>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <li><a href="https://www.google.com/"><FontAwesomeIcon icon="shopping-cart" /></a></li>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <li><a href="https://www.google.com/"><FontAwesomeIcon icon="sync-alt" /></a></li>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <li><a href="https://www.google.com/"><FontAwesomeIcon icon="heart" /></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="choose text-center">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <ul className="nav nav-pills nav-justified">
                        <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class ProductItem4 extends Component{
    render(){
        return(
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src="images/home/product1.jpg" alt="" />
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <p>Product Description</p>
                                <ul  id="menu">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="eye" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="shopping-cart" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="sync-alt" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="heart" /></a></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="choose text-center">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <ul className="nav nav-pills nav-justified">
                            <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                            <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
class ProductItem3 extends Component{
    render(){
        return(
            <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src="images/home/product1.jpg" alt="" />
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <p>Product Description</p>
                                <ul  id="menu">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="eye" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="shopping-cart" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="sync-alt" /></a></li>
                                        </div>
                                        <div className="col-lg-3 col-sm-3">
                                            <li><a href="https://www.google.com/"><FontAwesomeIcon icon="heart" /></a></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="choose text-center">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <ul className="nav nav-pills nav-justified">
                            <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                            <li><a href="https://google.com"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export {ProductItem4, ProductItem, ProductItem3}