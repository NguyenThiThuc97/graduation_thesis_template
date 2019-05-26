import React, {Component} from 'react'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToggleForm from './ToggleForm'
import {connect} from 'react-redux'
import {getItems} from './../../../actions/itemAction'
import PropsTypes, { element } from 'prop-types';

class Products extends Component{

    state = {
        modal : false,
        user_request : ""
    }

    handleBtn = () => {
        this.setState(
            {
                modal : !this.state.modal
            }
        )
    }

    componentDidMount(){
        this.props.getItems()
    }

    render(){
        this.props.item.items.map((element, index) => console.log(index, element))
        return(
            <div>
                <button className="btn btn-primary" onClick = {this.handleBtn}>ADD A NEW PRODUCT {' '}<FontAwesomeIcon icon='plus-circle'/></button>
                <ToggleForm isOpen = {this.state.modal} toggle = {this.handleBtn}/>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Products</th>
                            <th>Images</th>
                            <th>Manufacturers Information</th>
                            <th>Sale</th>
                            <th>Time Import</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.item.items.map((element, index ) => 
                        <tr key={index}>
                            <td onClick = {this.handleBtn}>{index}</td>
                            <td>{element.title}</td>
                            <td>{element.details.map((element_product, index_product) => 
                                <p key={index_product}>{element_product.size}{' '}{element_product.color}</p>
                            )}</td>
                            <td>{element.time}</td>
                            <td>{element.manufacture_details.model}{' '}({element.manufacture_details.name})</td>
                            <td>{element.sale.map((element_sale, index_sale) => 
                                <p key={index_sale}>{element_sale.calculation}{' '}{element_sale.name}</p>
                            )}</td>
                            <td>{element.time}</td>
                            <td>
                                <button className="btn btn-warning"><FontAwesomeIcon icon="edit"/></button>
                                <button className="btn btn-danger"><FontAwesomeIcon icon="trash"/></button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

Products.propsTypes = {
    getItems : PropsTypes.func.isRequired,
    item : PropsTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps, {getItems})(Products)