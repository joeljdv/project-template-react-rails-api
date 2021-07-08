import React, {useState, useEffect} from 'react'


const Car = (props) => {

    const [car, setCar] = useState({})
    const [error, setError] = useState("")

    useEffect( () => {
    fetch(`/cars/${props.match.params.id}`)
    .then(r => r.json())
    .then(data => {
        if(data.error){
            console.log(data.error)
            setError(data.error)
        }else {
            console.log(data)
            setCar(data)
        }
        })
    }, [] )

    if(error === '') {
        return (
            <div>
                <img src={car.image} class='car_img'/>
                <h2>{car.name}</h2>
                <p><strong>Make:</strong> {car.make}</p>
                <p><strong>Year:</strong> {car.year}</p>
            </div>
        )
    } else {
        return(
           <h3>{error}</h3> 
        )   
    }

   
}
export default Car