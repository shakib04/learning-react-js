import React, { useState } from 'react'
import Post from './Post'
import './post.css'

export default function PostList({ list, deleteCallback }) {

    return (
        <div className="flex-container">
            <h1>All Post List</h1>
            {
                list.map((p) => {
                    return <Post key={p.id} {...p} deleteCallback={deleteCallback} />
               })
            }
           
            
        </div>
    )
}
