import React, {useState, useEffect} from 'react'


const Car = (props) => {

    const [car, setCar] = useState({})
    const [error, setError] = useState("")

    useEffect( () => {
    fetch(`/cars/${props.match.params.id}`)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        setCar(data)
        })
    }, [] )

    return (
        <div>
            <img src={car.image} class='car_img'/>
            <h2>{car.name}</h2>
            <p><strong>Make:</strong> {car.make}</p>
            <p><strong>Year:</strong> {car.year}</p>
        </div>
        )
}
export default Car