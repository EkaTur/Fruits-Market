import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/fruitsSlice";
import gsap from 'gsap';
import { useLayoutEffect } from "react";

const Filter = ({ category }) => {

    useLayoutEffect(() => {
        gsap.fromTo('.filterContainer', {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 2, stagger: 0.3})
    }, [])

    const dispatch = useDispatch();
    
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="filterContainer">
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
        </div>
    )
}

export default Filter;