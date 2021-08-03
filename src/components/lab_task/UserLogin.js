import React, { useState } from 'react'

export default function UserLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        console.log(username);
        console.log(password);
    }
    return (
        <div>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} name="uname" required />

            <br />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} name="password" required />
            <br />
            <button type="submit" onClick={ handleSubmit}>Login</button>
        </div>
    )
}
