import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {!!cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} {...{ item }} />)
      ) : (
        <span className="cart-dropdown__message">
          Any item you add to your cart <br />
          will be visible here.
        </span>
      )}
    </div>
    <Button
      aria-disabled={!cartItems.length ? true : false}
      type="button"
      onClick={() => {
        if (cartItems.length) {
          dispatch(toggleCartVisibility());
          history.push('/checkout');
        }
      }}
    >
      Go to checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
