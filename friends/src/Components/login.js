import React, { useState } from "react"

//states
const [creds, setCreds] = useState({
    credentials: {username: "", password: ""}
})
const [isLoading, setIsLoading] = useState(false)

//functions
const handleChange = e => {

}

const LoginForm = () => {
    return(
        <div>
            <form>
                <input
                type = 'text'
                name = 'username'
                placeholder = 'username'
                value = {creds.credentials.username}
                onChange = {handleChange}
                />

                <input
                type = 'text'
                name = 'password'
                placeholder = 'password'
                value = {creds.credentials.password}
                onChange = {handleChange}
                />
                
            </form>
            <button>Submit</button>
        </div>
    )
}

export default LoginForm