import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './index.css';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. Fetch...
  };

  render() {
    return (
      <div className="checkout-btn col-md-2 offset-5">
        <StripeCheckout
          stripeKey="pk_test_mVLaP8FiAKVm0TfO3eONfCrg"

          amount="2500"
          label="Pay now with card"

          token={this.onToken}
        />
      </div>
    )
  }
}
