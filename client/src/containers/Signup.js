import React, { useState } from 'react'


const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation
            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <label>Password</label>
            <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <label>Confirm Password</label>
            <input 
            type="password" 
            id="password_confirmarion"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            <br/>
            <input type="submit"/>
        </form>
    )
}

export default Signup