import { useLayoutEffect } from "react";
import Filter from "./Filter";
import React from "react";
import gsap from 'gsap';

const AllCategories = () => {

    useLayoutEffect(() => {
        gsap.fromTo('.headerOrder', {y: -50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
    }, [])

    return (
        <div>
            <h1 className="headerOrder">Order your favorite fruits and berries!</h1>
            {['EXOTIC', 'BERRIES', 'CITRUS', 'OTHER', 'ALL'].map((category, index) => <Filter key={index} category={category} />)}
        </div>
    )
}

export default AllCategories;