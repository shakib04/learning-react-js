import React, { useState } from 'react'

export default function NewEmployee() {
    const [name, setName] = useState("")
    const [contact_no, setContact_no] = useState("")
    const [user_name, setUser_name] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        
    }

    return (
        <div>
            <form action="action_page.php" onSubmit={handleSubmit}>
                <div class="container">
                    <h1>Register New Employee</h1>
                    <p>Please fill in this form to create an Employee.</p>
                    <hr />

                    <label for="name"><b>name</b></label>
                    <input type="text" placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} name="name" id="name" required />

                    <label for="contact_no"><b>contact_no</b></label>
                    <input type="text" placeholder="Enter contact_no" onChange={(e) => { setContact_no(e.target.value) }} name="contact_no" id="contact_no" required />

                    <label for="user_name"><b>user_name</b></label>
                    <input type="text" placeholder="Enter user_name" onChange={(e) => { setUser_name(e.target.value) }} name="user_name" id="user_name" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} name="psw" id="psw" required />
                    <hr />

                    <button type="submit" class="registerbtn">Save</button>

                </div>


            </form>
        </div>
    )
}
