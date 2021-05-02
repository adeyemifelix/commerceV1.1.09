import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PayStackConfig from '../../components/paystack-button/paystack-button.component'

import { 
    selectCartItems, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className='total'>TOTAL: N{total}</div>
        <div className='test-warning'>
            *Kindly note that this is just a test demo with payment servicing company integration, PayStack* 
        </div>
       <span className='button'> <PayStackConfig price={total}/> </span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);