import React, { useState } from "react"
import axiosWithAuth from '../Utils/axiosWithAuth'

const NewFriendForm = () => {

    const [newFriend, setNewFriend] = useState({
        id: new Date(),
        name: '',
        age: '',
        email: '',
    })

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const sendFriend = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', newFriend) //url + state
            
    }
    return(
        <div>
            <form>
                <h1>New Friend</h1>
                <input
                type = 'text'
                name = 'name'                
                value = {newFriend.name}
                placeholder = 'name'
                onChange = {handleChange}
                />

                <input
                type = 'text'
                name = 'age'                
                value = {newFriend.age}
                placeholder = 'age'
                onChange = {handleChange}
                />
                
                <input
                type = 'text'
                name = 'email'                
                value = {newFriend.email}
                placeholder = 'email'
                onChange = {handleChange}
                />
                <button onClick = {sendFriend}>Submit</button>
                
            </form>
            
        </div>
    )
}

export default NewFriendForm