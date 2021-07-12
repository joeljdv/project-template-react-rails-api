import React,{useState} from 'react'
import Car from './Car'

const EditCarForm = (props) => {

    const [name, setName] = useState(props.car.name)
    const [make, setMake] = useState(props.car.make)
    const [year, setYear] = useState(props.car.year)
    const [image, setImage] = useState(props.car.image)


    const handleSubmit = (e) => {
        e.preventDefault()
        props.editCar({
            name: name,
            make: make,
            year: year,
            image: image
        })
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <label>Make</label>
                <input 
                type= "text"
                id="make"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                />
                <br/>
                <label>Year</label>
                <input 
                type="text"
                id="year" 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />
                <br/>
                <label>Image_url</label>
                <input 
                type="text" 
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditCarForm