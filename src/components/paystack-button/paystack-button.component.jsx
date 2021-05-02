import React from 'react'
import { PaystackButton }  from 'react-paystack';

const PayStackConfig = ({price}) => {
    const priceForStack = price * 100;
    const publishable = 'pk_test_b210bdbaff239507fb24ac82136e07b8ea455012'
    const email = 'ogundareadeyemi62@gmail.com'
    const name = 'Flexy clothing Ltd'
    const text = 'Pay Now'
    const subaccount = 'ACCT_kslwxt2u8g4reg3'
    const plan = 'PLN_ufpkm9vy5hfqi9r'


    return (
        <PaystackButton
        publicKey={publishable}
        email={email}
        amount={priceForStack}
        name= {name}
        text = {text}
        subaccount ={subaccount}
        plan = {plan}
        label
        />
    )
}

export default PayStackConfig;
