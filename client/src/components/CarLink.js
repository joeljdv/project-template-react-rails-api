import React from 'react'
import { Link } from 'react-router-dom'

const CarLink = ({car}) => {
    return (
        <div>
            <Link to={`/cars/${car.id}`}>
                {car.year} {car.name}
            </Link>
        </div>
    )
}

export default CarLink