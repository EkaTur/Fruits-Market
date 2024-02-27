const ChangeQuantity = ({ quantity, setQuantity }) => {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className="QuantityContainer">
            <button className="btnQuantity" onClick={addQuantity}>+</button>
            <p>{quantity} kg</p>
            <button className="btnQuantity" onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;