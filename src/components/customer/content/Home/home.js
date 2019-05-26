import React, {Component} from 'react'
import HomeSlider from './HomeSlider'

export default class Home extends Component{
    render(){
        return(
            <div>
                {/* <!-- slider start --> */}
                <div className="slider-wrap">
                    <div className="preview-2">
                        <HomeSlider/>
                    </div>
                </div>
                {/* <!-- slider end --> */}
                {/* <!-- slider bottom start --> */}
                <div className="slider-bottom-area mt-10 text-left">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="single-slider-bottom">
                                    <div className="single-slider-bottom-img">
                                        <a href="product-details.html"><img src={process.env.PUBLIC_URL + "img/slider-bottom/1.jpg"} alt="product"/></a>
                                    </div>
                                    <div className="single-slider-info">
                                        <h4 className="text-uppercase">exclusive </h4>
                                        <h2 className="text-uppercase">bag’s</h2>
                                        <h4 className="text-uppercase">COLLECTION </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="single-slider-bottom">
                                    <div className="single-slider-bottom-img">
                                        <a href="product-details.html"><img src={process.env.PUBLIC_URL + "img/slider-bottom/2.jpg"} alt="product"/></a>
                                    </div>
                                    <div className="single-slider-info">
                                        <h4 className="text-uppercase">EXCLUSIVE </h4>
                                        <h2 className="text-uppercase">shoe’s</h2>
                                        <h4 className="text-uppercase">COLLECTION </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm col-xs-12">
                                <div className="single-slider-bottom">
                                    <div className="single-slider-bottom-img">
                                        <a href="product-details.html"><img src={process.env.PUBLIC_URL + "img/slider-bottom/3.jpg"} alt="product"/></a>
                                    </div>
                                    <div className="single-slider-info">
                                        <h4 className="text-uppercase">EXCLUSIVE </h4>
                                        <h2 className="text-uppercase">watch</h2>
                                        <h4 className="text-uppercase">for men </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm col-xs-12">
                                <div className="single-slider-bottom">
                                    <div className="single-slider-bottom-img">
                                        <a href="product-details.html"><img src={process.env.PUBLIC_URL + "img/slider-bottom/4.jpg"} alt="product"/></a>
                                    </div>
                                    <div className="single-slider-info">
                                        <h4 className="text-uppercase">EXCLUSIVE </h4>
                                        <h2 className="text-uppercase">Bag's</h2>
                                        <h4 className="text-uppercase">for women </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--slider bottom end --> */}
                {/* <!-- arrival start--> */}
                <div className="arrival-area clearfix pt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu text-center mb-45">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#new" aria-controls="new" role="tab" data-toggle="tab">New Arrival</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#featured" aria-controls="featured" role="tab" data-toggle="tab">Featured</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#best" aria-controls="best" role="tab" data-toggle="tab">Best Selling</a></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="tab-content row">
                                        <div id="new" role="tabpanel" className="active section-tab-item">
                                            <div className="tab-item-slider">
                                            {/* only show 8 products */}
                                                <div className="row">
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div id="featured" role="tabpanel" className="section-tab-item">
                                            <div className="tab-item-slider">
                                                <div className="row">
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                            <div className="single-product">
                                                                <div className="single-product-item clearfix">
                                                                    <div className="single-product-img clearfix">
                                                                        <a href="#">
                                                                            <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                        </a>
                                                                        <div className="wish-icon-hover text-center clearfix">
                                                                            <div className="hover-text">
                                                                                <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                                <ul>
                                                                                    <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                    <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                    <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                    <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="single-product-info clearfix">
                                                                        <div className="pro-rating">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="pro-price">
                                                                            <span className="new-price">$150</span>
                                                                            <span className="old-price">$180</span>
                                                                        </div>
                                                                        <h3><a href="#">Electria Ostma</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="best" role="tabpanel" className="section-tab-item">
                                            <div className="tab-item-slider">
                                                <div className="row">
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 col-width">
                                                        <div className="single-product">
                                                            <div className="single-product-item clearfix">
                                                                <div className="single-product-img clearfix">
                                                                    <a href="#">
                                                                        <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                    </a>
                                                                    <div className="wish-icon-hover text-center clearfix">
                                                                        <div className="hover-text">
                                                                            <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                            <ul>
                                                                                <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                                <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                                <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-product-info clearfix">
                                                                    <div className="pro-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">$150</span>
                                                                        <span className="old-price">$180</span>
                                                                    </div>
                                                                    <h3><a href="#">Electria Ostma</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrival-button text-center mt-30">
                                    <a href='#' className='section-button'>View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- arrival end --> */}
                {/* <!-- featured start --> */}
                <div className="featured-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#featured1" aria-controls="featured1" role="tab" data-toggle="tab">Featured</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#trendy" aria-controls="trendy" role="tab" data-toggle="tab">Trendy</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#best1" aria-controls="best1" role="tab" data-toggle="tab">Best Selling</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 hidden-sm hidden-xs">
                                <div className="featured-left mt-2">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/product/b1.jpg"} alt=""/>
                                    </a>
                                    <span className="red hidden-sm" style={{marginLeft: "35px"}}>hot</span>
                                </div>
                                <div className="single-product-info clearfix">
                                    <div className="pro-title">
                                        <h3><a href="#">Electria Ostma</a></h3>
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$150</span>
                                        <span className="old-price">$180</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="clearfix"></div>
                                <div className="tab-content row">
                                    <div id="featured1" role="tabpanel" className="active section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="trendy" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="best1" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrival-button text-left">
                                    <a href='#' className='section-button mt-30'>View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- featured end --> */}
                {/* <!-- off banner area start --> */}
                <div className="off-banner-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="single-off-banner text-left">
                                <div className="off-img">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/off-banner/1.jpg"} alt=""/>
                                    </a>
                                </div>
                                <div className="off-text">
                                    <h4 className="text-uppercase">GET 25% OFF</h4>
                                    <h2 className="text-uppercase">MEN’S </h2>
                                    <h4 className="text-uppercase">COLLECTION </h4>
                                    <a href="#" className="section-button">shop now</a>
                                </div>
                            </div>
                            <div className="single-off-banner text-center">
                                <div className="off-img">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/off-banner/2.jpg"} alt=""/>
                                    </a>
                                </div>
                                <div className="off-text">
                                    <h3 className="text-uppercase">EXCLUSIVE </h3>
                                    <h2 className="text-uppercase">MEN’S &amp; WOMEN's</h2>
                                    <h3 className="text-uppercase">COLLECTION </h3>
                                    <a href="#" className="section-button">shop now</a>
                                </div>
                            </div>
                            <div className="single-off-banner text-left">
                                <div className="off-img">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/off-banner/3.jpg"} alt=""/>
                                    </a>
                                </div>
                                <div className="off-text">
                                    <h4 className="text-uppercase">GET 25% OFF</h4>
                                    <h2 className="text-uppercase">WOMEN’S </h2>
                                    <h4 className="text-uppercase">COLLECTION </h4>
                                    <a href="#" className="section-button">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="consultation-angle"></div>
                </div>
                {/* <!-- off banner area end --> */}
                {/* <!-- women area start --> */}
                <div className="women-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#dress" aria-controls="dress" role="tab" data-toggle="tab">dress</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#tops" aria-controls="tops" role="tab" data-toggle="tab">tops</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#handbags" aria-controls="handbags" role="tab" data-toggle="tab">handbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="clearfix"></div>
                                <div className="tab-content row">
                                    <div id="dress" role="tabpanel" className="active section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tops" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="handbags" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                            <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrival-button text-center mt-30">
                                    <a href='#' className='section-button'>View More</a>
                                </div>
                            </div>
                            <div className="col-md-5 hidden-sm hidden-xs">
                                <div className="featured-left mt-2 pull-right">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/product/b2.jpg"} alt=""/>
                                        <div className="feature-info text-right">
                                            <h2 className="text-uppercase">women's</h2>
                                            <h3 className="text-uppercase">collection</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- women area end --> */}
                {/* <!-- offer area start --> */}
                <div className="offer-area ptb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-5 col-xs-12">
                                <div className="offer-img">
                                    <img src={process.env.PUBLIC_URL + "img/offer/1.png"} alt="product"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-7 col-xs-12">
                                <div className="offer-info mt-40 text-center">
                                    <h3>GET IT NOW</h3>
                                    <h1>LIMITED OFFER</h1>
                                    <h5 className="hidden-xs">HANDBAGS COLLECTION FOR WOMEN</h5>
                                </div>
                                <div className="timer">
                                    <div data-countdown="2017/02/01" className="timer-grid"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- offer area end --> */}
                {/* <!-- men area start --> */}
                <div className="men-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#coats" aria-controls="coats" role="tab" data-toggle="tab">coats</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#shirts" aria-controls="shirts" role="tab" data-toggle="tab">shirts</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#accessories" aria-controls="accessories" role="tab" data-toggle="tab">accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 hidden-sm hidden-xs">
                                <div className="featured-left mt-2">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "img/product/b3.jpg"} alt=""/>
                                        <div className="feature-info text-left">
                                            <h2 className="text-uppercase">men's</h2>
                                            <h3 className="text-uppercase">collection</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="clearfix"></div>
                                <div className="tab-content row">
                                    <div id="coats" role="tabpanel" className="active section-tab-item">
                                        <div className="feature-slider">
                                        <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="shirts" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                        <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="accessories" role="tabpanel" className="section-tab-item">
                                        <div className="feature-slider">
                                        <div className="row">
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-width">
                                                    <div className="single-product not-padding">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src={process.env.PUBLIC_URL + "img/product/1.jpg"} alt="product"/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p>Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Compage"><i className="fa fa-refresh"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>
                                                                <h3><a href="#">Electria Ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrival-button text-center mt-30">
                                    <a href='#' className='section-button'>View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- men area end --> */}
                {/* <!-- newsletter area start --> */}
                <div className="newsletter-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="newsletter-info">
                                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                                    <div className="news-left text-right">
                                        <a href="#" className="section-button">sign up for free</a>
                                        <h3 className="text-uppercase">subscribe newsletter</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                                    <div className="news-right text-center">
                                        <form action="#" id="mc-form" className="mc-form">
                                            <input id="mc-email" type="text" name="email" placeholder="Type Your Email Address..."/>
                                            <button id="mc-submit" type="submit" className="text-uppercase">send</button>
                                            <span className="hidden-xs"><input type="checkbox" name="agree"/>By Subscribing to our newsletter you are agree to receive emails from us !</span>
                                        </form>
                                        {/* <!-- mailchimp-alerts Start --> */}
                                        <div className="mailchimp-alerts text-centre fix">
                                            <div className="mailchimp-submitting"></div>{/*<!-- mailchimp-submitting end -->*/}
                                            <div className="mailchimp-success"></div>{/*<!-- mailchimp-success end -->*/}
                                            <div className="mailchimp-error"></div>{/*<!-- mailchimp-error end -->*/}
                                        </div>
                                        {/* <!-- mailchimp-alerts end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- newsletter area end --> */}
                {/* <!-- blog area start --> */}
                <div className="blog-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#blog" aria-controls="blog" role="tab" data-toggle="tab">from blog</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#tweet" aria-controls="tweet" role="tab" data-toggle="tab">latest tweet</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#instagram" aria-controls="instagram" role="tab" data-toggle="tab">instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="clearfix"></div>
                            <div className="tab-content row">
                                <div id="blog" role="tabpanel" className="active section-tab-item">
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-blog">
                                            <div className="single-blog-img">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/1.jpg"} alt="blog"/>
                                                </a>
                                                <div className="blog-date text-center">
                                                    <h2>05 <span>Feb</span></h2>
                                                </div>
                                            </div>
                                            <div className="single-blog-info mt-25">
                                                <h4><a href="blog.html">Beautiful Collection For Beauty</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bornad will give you a complete pain was praising</p>
                                                <div className="button-comments">
                                                    <div className="read-button text-center">
                                                        <a className="read-more text-uppercase" href="blog.html">read More <i className="fa fa-angle-double-right"></i></a>
                                                    </div>
                                                    <div className="comment-like">
                                                        <ul>
                                                            <li><i className="fa fa-comments"></i>06 comments</li>
                                                            <li><i className="fa fa-heart"></i>25 likes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-blog">
                                            <div className="single-blog-img">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/2.jpg"} alt="blog"/>
                                                </a>
                                                <div className="blog-date text-center">
                                                    <h2>09 <span>Feb</span></h2>
                                                </div>
                                            </div>
                                            <div className="single-blog-info mt-25">
                                                <h4><a href="blog.html">Fashion Show With New Trend</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bornad will give you a complete pain was praising</p>
                                                <div className="button-comments">
                                                    <div className="read-button text-center">
                                                        <a className="read-more text-uppercase" href="blog.html">read More <i className="fa fa-angle-double-right"></i></a>
                                                    </div>
                                                    <div className="comment-like">
                                                        <ul>
                                                            <li><i className="fa fa-comments"></i>10 comments</li>
                                                            <li><i className="fa fa-heart"></i>20 likes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 hidden-sm col-xs-12">
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>12 <span>Feb</span></h2>
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Men’s New Trend</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>15 <span>Feb</span></h2>
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Fashion Show</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>20 <span>Feb</span></h2>
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Dress for Curte Gril</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list hidden-md">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>09 <span>Feb</span></h2>
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Latest Handbag Collection</a></h4>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tweet" role="tabpanel" className="section-tab-item">
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src={process.env.PUBLIC_URL + "img/icon/twitter.png"} alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="instagram" role="tabpanel" className="section-tab-item">
                                    <div className="row mb-25">
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/1.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/2.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/1.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/2.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/1.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src={process.env.PUBLIC_URL + "img/blog/2.jpg"} alt="blog"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- blog area end --> */}
                {/* <!-- testimonial area start --> */}
                <div className="testimonial-area pt-100 pb-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-3 col-xs-12">
                                <div className="testimonial-left text-right">
                                    <h2>CUSTOMER REVIEWS</h2>
                                    <p className="hidden-sm">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bornad</p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-8 col-sm-9 col-xs-12">
                                <div className="testi-owl">
                                    <div className="testimonial-right">
                                        <div className="testimonial-img">
                                            <img src={process.env.PUBLIC_URL + "img/testimonial/1.jpg"} alt=""/>
                                        </div>
                                        <div className="testimonial-info">
                                            <h3>Zaculine Jenelia, <span> Head Of Business</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliqua. Ut enim ad minim veniam quis</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-img">
                                            <img src={process.env.PUBLIC_URL + "img/testimonial/1.jpg"} alt=""/>
                                        </div>
                                        <div className="testimonial-info">
                                            <h3>Zaculine Jenelia, <span> Head Of Business</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliqua. Ut enim ad minim veniam quis</p>
                                            <a href="#" className="section-button mt-30">view more</a>
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-img">
                                            <img src={process.env.PUBLIC_URL + "img/testimonial/1.jpg"} alt=""/>
                                        </div>
                                        <div className="testimonial-info">
                                            <h3>Zaculine Jenelia, <span> Head Of Business</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliqua. Ut enim ad minim veniam quis</p>
                                            <a href="#" className="section-button mt-30">view more</a>
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-img">
                                            <img src={process.env.PUBLIC_URL + "img/testimonial/1.jpg"} alt=""/>
                                        </div>
                                        <div className="testimonial-info">
                                            <h3>Zaculine Jenelia, <span> Head Of Business</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliqua. Ut enim ad minim veniam quis</p>
                                            <a href="#" className="section-button mt-30">view more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- testimonial area end --> */}
                
            </div>
        )
    }
}