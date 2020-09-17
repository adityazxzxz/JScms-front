import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';


const Login = () => {
    const loginReducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return [
                    ...state,
                    { email: action.email, token: action.token }
                ]
        }
    }
    const [session, dispatch] = useReducer(loginReducer, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log('change')
    })

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            let res = await axios.post('http://202.159.121.198:3232/login', qs.stringify({ email, password }), {
                crossdomain: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Email' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
