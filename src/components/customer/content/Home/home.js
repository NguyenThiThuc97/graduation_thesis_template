import React, {Component} from 'react'
// import CarouselSlider from "react-carousel-slider"
import InfiniteCarousel from 'react-leaf-carousel';
// import MetisMenu from 'react-metismenu';
// import Slider from 'nw-react-slider'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'
//
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// To include the default styles
import 'react-rangeslider/lib/index.css'
import {ProductItem4, ProductItem, ProductItem3} from './../Product/ProductItem'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
// const styles = theme => ({
//     root: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.paper,
//     },
// });
class SimpleTabs extends Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
    //   const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <div>
          <AppBar position="static" style={{backgroundColor : '#40403E'}}>
            <Tabs value={value} onChange={this.handleChange} inkBarStyle={{background: 'blue'}}>
              <Tab label="T-Shirt" />
              <Tab label="Kids" />
              <Tab label="Dress" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><ProductItem3/><ProductItem3/><ProductItem3/><ProductItem3/></TabContainer>}
          {value === 1 && <TabContainer><ProductItem3/><ProductItem3/><ProductItem3/><ProductItem3/></TabContainer>}
          {value === 2 && <TabContainer><ProductItem3/><ProductItem3/><ProductItem3/><ProductItem3/></TabContainer>}
        </div>
      );
    }
  }
  
  SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

class Sportswear extends Component{
    render(){
        return(
            <div id="sportswear" className="panel-collapse collapse">
                <div className="panel-body">
                    <ul>
                        <li><a href="https://google.com">Nike </a></li>
                        <li><a href="https://google.com">Under Armour </a></li>
                        <li><a href="https://google.com">Adidas </a></li>
                        <li><a href="https://google.com">Puma</a></li>
                        <li><a href="https://google.com">ASICS </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Mens extends Component{
    render(){
        return(
            <div id="mens" className="panel-collapse collapse">
                <div className="panel-body">
                    <ul>
                        <li><a href="https://google.com">Fendi</a></li>
                        <li><a href="https://google.com">Guess</a></li>
                        <li><a href="https://google.com">Valentino</a></li>
                        <li><a href="https://google.com">Dior</a></li>
                        <li><a href="https://google.com">Versace</a></li>
                        <li><a href="https://google.com">Armani</a></li>
                        <li><a href="https://google.com">Prada</a></li>
                        <li><a href="https://google.com">Dolce and Gabbana</a></li>
                        <li><a href="https://google.com">Chanel</a></li>
                        <li><a href="https://google.com">Gucci</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Womens extends Component{
    render(){
        return(
            <div id="womens" className="panel-collapse collapse">
                <div className="panel-body">
                    <ul>
                        <li><a href="https://google.com">Fendi</a></li>
                        <li><a href="https://google.com">Guess</a></li>
                        <li><a href="https://google.com">Valentino</a></li>
                        <li><a href="https://google.com">Dior</a></li>
                        <li><a href="https://google.com">Versace</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
const data = [
    {
        title: 'Sportswear',
        paragraph : <Sportswear/>
    },
    {
        title: 'Mens',
        paragraph : <Mens/>
    },
    {
        title: 'Womens',
        paragraph : <Womens/>
    },
    {
        title : 'Kids',
        paragraph : null
    },
    {
        title : 'Fashion',
        paragraph : null
    },
    {
        title : 'HOUSEHOLDS',
        paragraph : null
    },
    {
        title : 'INTERIORS',
        paragraph : null
    },
    {
        title : 'CLOTHING',
        paragraph : null
    },
    {
        title : 'BAGS',
        paragraph : null
    },
    {
        title : 'SHOES',
        paragraph : null
    }
]

class Accordion extends React.Component {
    render () {
      return (
        <div {...{ className: 'wrapper' }}>
          <ul {...{ className: 'accordion-list' }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key }}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
}
  
class AccordionItem extends React.Component {
    state = {
        opened: false
    }
    render () {
        const {
            props: {
                paragraph,
                title
            },
            state: {
                opened
            }
        } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            {paragraph ? <span {...{ className: 'accordion-item__icon' }}/> : null}
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {paragraph}
                </p>
              </div>
            </div>
        </div>
      )
    }
}

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            volume: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
          volume: value
        })
      }

    render(){
        let { volume } = this.state
        return(
            <section className = "pdt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <div className="panel-group category-products" id="accordian">
                                    <Accordion />
                                </div>
                            
                                <div className="brands_products">
                                    <h2>Brands</h2>
                                    <div className="brands-name">
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="https://google.com"> <span className="pull-right">(50)</span>Acne</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(27)</span>Albiro</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(32)</span>Ronhill</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(5)</span>Oddmolly</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(9)</span>Boudestijn</a></li>
                                            <li><a href="https://google.com"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="price-range">
                                    <div className="well text-center">
                                        {/* <input type="text" className="span2" defaultValue="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                                        <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b> */}
                                        <Slider
                                            value={volume}
                                            orientation="horizontal"
                                            onChange={this.handleOnChange}
                                        />
                                        <h2 style={{margin : '20px 0px'}}>Price Range</h2>
                                    </div>
                                </div>
                                
                                <div className="shipping text-center">
                                    <img src="images/home/shipping.jpg" alt="" />
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">Features Items</h2>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                                <ProductItem4/>
                            </div>
                            
                        <div class="aa">{/* in style.css*/}
                            <SimpleTabs/>
                        </div>
                            <div className="recommended_items">
                                <h2 className="title text-center">RECOMMENDED ITEMS</h2>
                                <div style = {{position:"relative"}} >
                                    <InfiniteCarousel
                                        breakpoints={[
                                        {
                                            breakpoint: 500,
                                            settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                            },
                                        },
                                        {
                                            breakpoint: 768,
                                            settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 3,
                                            },
                                        },
                                        ]}
                                        dots={true}
                                        showSides={true}
                                        sidesOpacity={.5}
                                        sideSize={.1}
                                        slidesToScroll={4}
                                        slidesToShow={4}
                                        scrollOnDevice={true}
                                    >
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                    </InfiniteCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscribe-newletter">
                    <div className=''>
                        <img alt = "" src="https://devitems.com/html/shofixe-preview/shofixe/img/banner/1.jpg"/>
                    </div>
                    <div className="background-opacity">
                        
                    </div>
                    <div className="subscribe-newletter-element">
                        <div className="row" style={{marginRight : '0', padding:'70px', color:'#fff'}}>
                            <div className="col-sm-4 col-md-4 col-xl-4">
                                <h3>SUBSCRIBE NEWSLETTER</h3>
                            </div>
                            
                            <div className="col-sm-6 col-md-6 col-xl-6" style={{borderLeft: ' solid #fff'}}>
                                <input type="text"/><button className="btn-send-subscribe"><i className="fa fa-arrow-circle-o-right"></i></button>
                                <input type="checkbox"/>By Subscribing to our newsletter you are agree to receive emails from us !
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home