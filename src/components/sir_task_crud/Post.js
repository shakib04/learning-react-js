import React, { useState } from 'react'
import './post.css'

export default function Post({ id, userId, title, body, deleteCallback }) {

    const [postlist, setPostlist] = useState()

    const handleDelete = () => {
        deleteCallback(id)
    }

    return (
        <div >
            <div>
                <h3>{id}</h3>
                <p>{title}</p>
                <p>{body}</p>
                <p>Post By: {userId}</p>
                <p><button onClick={handleDelete}>Delete</button></p>
            </div>
        </div>
    )
}
