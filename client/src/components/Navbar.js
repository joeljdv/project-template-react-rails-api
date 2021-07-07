import React from 'react'
import { NavLink, Link } from 'react-router-dom'
 

const Navbar = (props) => {

    if (props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
                <br/>
                    <button onClick={props.logoutUser}>Logout</button>
            </div>
            
        )
    }else {
        return (
            <div>
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
    ) 
    }

   
}

export default Navbar