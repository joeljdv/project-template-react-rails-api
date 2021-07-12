import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EditCarForm from './EditCarForm'


const Car = (props) => {

    const [car, setCar] = useState({})
    const [error, setError] = useState("")
    const [editForm, setEditForm] = useState(false)

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

    const deleteCar = () => {
        fetch(`/cars/${props.match.params.id}`, {
            method: "DELETE"
        })
    }

    const editCar = (c) => {
        fetch(`/cars/${props.match.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(c),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setEditForm(false)
            setCar(data)
        })
    }


    if(error === '') {
        return (
            <div>
                <img src={car.image} className='car_img'/>
                <h2>{car.name}</h2>
                <p><strong>Make:</strong> {car.make}</p>
                <p><strong>Year:</strong> {car.year}</p>
                <Link to='/cars'>
                    <button onClick={deleteCar}>Delete car</button>
                </Link>
                {editForm ? <EditCarForm car={car} editCar={editCar}/> :
                    <button onClick={() => setEditForm(true)}>Edit car</button>
                }
            </div>
        )
    } else {
        return(
           <h3>{error}</h3> 
        )   
    }

   
}
export default Car