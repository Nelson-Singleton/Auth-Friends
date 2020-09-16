import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'
import NewFriendForm from './newFriendForm'

const FriendsList = (props) => {

    const [friendData, setFriendData] = useState([])

    useEffect (() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setFriendData(res.data)
            })
            //.catch(console.log('Error fetching friends'))
    },[]) //don't forget the []

    return (
        
        <div>            
            <NewFriendForm />
            {
                friendData.map(someFriend => {
                    return(
                    <div key = {someFriend.id}>
                        <h2>{someFriend.name}</h2>
                    </div>)
                })
            }
        </div>
    )
}

export default FriendsList