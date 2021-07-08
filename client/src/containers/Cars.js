import React, {useState, useEffect} from 'react'
import CarsForm from './CarsForm'


const Cars = () => {
    const [cars, setCars] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)

    useEffect( () => {
        fetch('/cars')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if(data){
                if(data.error){
                    setError(data.error)
                } else {
                    setCars(data)
                }
            }else {
                setError("Not Authorized")
            }
        })
    }, [])

    const addCar = (car) => {
        fetch('/cars', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(car)
        })
        .then(r => r.json)
        .then(data => {
            setCars([...cars, data])
            setFormFlag(false)
        })
    }

    const carsList = cars.map(car => <li key={car.id} >{car.year} {car.name}</li>)

    if (error === '') {
        return (
            <div>
                <ul>
                    {carsList}
                    {formFlag ?
                        <CarsForm addCar={addCar}/> :
                        <button onClick={() => {setFormFlag(true)}}>Add car</button>
                    }
                </ul>
            </div>
        )
    }else {
        return (
            <div>   
                <h3>Not authorized</h3>
                <h2> Please Sign up or Login</h2>   
             </div>
        )
    }
    
}

export default Cars