import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';


const Login = (props) => {

    useEffect(() => {
        let session = localStorage.getItem('session')
        if(session){
            props.history.push('/dashboard')
        }
        
    }, [])
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            let res = await axios.post('http://202.159.121.198:3232/login', qs.stringify({ email, password }), {
                crossdomain: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            localStorage.setItem('session',JSON.stringify(res.data))
            props.history.push('/dashboard')
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={onSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br />
                                <input type="text" name="username" id="username" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br />
                                <input type="password" name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                <button className="btn btn-info btn-md">Submit</button>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;
