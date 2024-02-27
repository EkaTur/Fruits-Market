import { useSelector } from 'react-redux';
import icon from '../../icon.png'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Cart = () => {

    useLayoutEffect(() => {
        gsap.fromTo('.cartContainer', {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
    }, [])

    const totalPrice = useSelector(getTotalPrice);
    const cartItems = useSelector(getCartItems);

    return (
        <div className='cartContainer'>
            <h3 className='HeaderTotal'>Total price: {totalPrice}€</h3>
            <img src={icon} alt='icon' width='70px' />
            {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)}
        </div>
    )
}

export default Cart;