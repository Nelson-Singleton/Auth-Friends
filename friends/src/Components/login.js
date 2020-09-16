import Axios from "axios"
import React, { useState } from "react"
import axiosWithAuth from '../Utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {

    const history = useHistory()

//states
const [creds, setCreds] = useState({
    credentials: {username: "", password: ""}
})
    

//functions
const handleChange = e => {
    setCreds({
        credentials:
            {...creds.credentials,
            [e.target.name]: e.target.value
    }
    })
}

const login = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/api/login', creds.credentials)
        .then(res => {
            
            localStorage.setItem('token', res.data.payload) //.payload .token
            
            history.push('/protected')
            
        })
        .catch(err => {
            console.log(err.response.data.error)
        })
}


const [isLoading, setIsLoading] = useState(false)


    return(
        <div>
            <form onSubmit = {() =>login}>
                <input
                type = 'text'
                name = 'username'                
                value = {creds.credentials.username}
                placeholder = 'username'
                onChange = {handleChange}
                />

                <input
                type = 'text'
                name = 'password'                
                value = {creds.credentials.password}
                placeholder = 'password'
                onChange = {handleChange}
                />
                
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default LoginForm