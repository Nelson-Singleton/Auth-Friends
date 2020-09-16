import Axios from "axios"
import React, { useState } from "react"
import axiosWithAuth from '../Utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {

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
    axiosWithAuth
        .post('/api/login', creds.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token) //.payload
            useHistory.push('/protected')
        })
}

    //states
const [creds, setCreds] = useState({
    credentials: {username: "", password: ""}
})
const [isLoading, setIsLoading] = useState(false)


    return(
        <div>
            <form onSubmit = {login}>
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
                
            </form>
            <button>Submit</button>
        </div>
    )
}

export default LoginForm