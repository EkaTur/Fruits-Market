import { useEffect } from "react";
import { useDispatch } from "react-redux";
import dataFruits from "../../data/dataFruits";
import { removeItemFromCart } from "../../redux/cartSlice";
import gsap from 'gsap';

const CartItem = ({ cartItem }) => {

    useEffect(() => {
        gsap.fromTo('.CartContainer', {opacity: 0}, {opacity: 1, duration: 2})
    }, [])
    
    const fruits = dataFruits.find(item => item.id === cartItem.fruitId);

    const dispatch = useDispatch();

    return (
        <div className="CartContainer">
            <p className="cartName">{fruits.name}</p>
            <p className="quantityPar">{cartItem.quantity} kg</p>
            <p className="priceCartPar">{fruits.price * cartItem.quantity}€</p>
            <button onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}} className="btnDelete">DELETE</button>
        </div>
    )
}

export default CartItem;