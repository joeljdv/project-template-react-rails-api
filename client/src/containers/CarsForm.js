import React, {useState} from 'react'

const CarsForm = (props) => {
    const [name, setName] = useState("")
    const [make, setMake] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState("")


    const handleSubmit = (e) => {
      e.preventDefault()
      props.addCar({
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

export default CarsForm