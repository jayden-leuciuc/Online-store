import CartReducer from '../redux/cart/cart.reducer';
import CartActionTypes from '../redux/cart/cart.actions';
describe('search', () => {
  it('should return state', () => {
    expect(CartReducer.CLEAR_CART(undefined, {})).toEqual({ cartItems: [] });
  });
});
