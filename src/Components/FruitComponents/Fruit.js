import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import gsap from 'gsap';

const Fruit = ({ fruit }) => {

    useEffect(() => {
        gsap.fromTo('.fruitContainer', {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.5})
    }, [])

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    return (
        <div className="fruitContainer">
            <img className="fruitPhoto" src={`${fruit.img}.jpg`} alt='fruitPhoto' width='500px'/>
            <h2>{fruit.name}</h2>
            <p className="pricePar">{fruit.price}€</p>
            <div>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                <button onClick={() => {dispatch(addItemToCart({fruit, quantity}))}} className="btnAdd">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Fruit;