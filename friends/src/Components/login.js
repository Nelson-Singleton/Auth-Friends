import Axios from "axios"
import React, { useState } from "react"
import axiosWithAuth from '../Utils/axiosWithAuth'

//states
const [creds, setCreds] = useState({
    credentials: {username: "", password: ""}
})
const [isLoading, setIsLoading] = useState(false)

//functions
const handleChange = e => {
    setCreds({
        credentials:
            {...creds,
            [e.target.name]: e.target.value
    }
    })
}

const login = e => {
    axiosWithAuth
        .post('/api/login', creds.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token) //.payload
            //history.push('/protected')
        })

}

const LoginForm = () => {
    return(
        <div>
            <form onSubmit = {login}>
                <input
                type = 'text'
                name = 'username'                
                value = {creds.credentials.username}
                onChange = {handleChange}
                />

                <input
                type = 'text'
                name = 'password'                
                value = {creds.credentials.password}
                onChange = {handleChange}
                />
                
            </form>
            <button>Submit</button>
        </div>
    )
}

export default LoginForm