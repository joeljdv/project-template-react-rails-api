import React from 'react'
import { NavLink, Link } from 'react-router-dom'
 

const Navbar = (props) => {

    if (props.loggedIn) {
        return (
            <Link>
                <button>Signup</button>
            </Link>
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