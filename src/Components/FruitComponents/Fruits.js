import { useSelector } from "react-redux";
import dataFruits from "../../data/dataFruits";
import { getSelectedCategory } from "../../redux/fruitsSlice";
import Fruit from "./Fruit";

const Fruits = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dataFruits.filter(fruit => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === fruit.category;
            })
                .map((fruit, index) => <Fruit key={index} fruit={fruit} />)}
        </div>
    )
}

export default Fruits;