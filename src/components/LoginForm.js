import React, { useState } from 'react'
import axios from 'axios'
import { retry } from 'async'
import { func } from 'prop-types'
import './LoginForm.css'

const API_ENDPOINT = 'https://loginsignup-app.herokuapp.com'

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')


    const loginUser = async () => {
        var token
        await axios.post(`${API_ENDPOINT}/api/user/login`, {
            email, password
        }).then(function (response){
            console.log(response)
            token = response.data
            loggedIn(token)
          
        }).catch(function (error){
            console.log(error)
        })
  
    }

    const loggedIn = async (token) => {
        const res = await axios.get(`${API_ENDPOINT}/api/loggedin`, {
            headers: { 'auth-token': token }
        })
        .then(function (response){
            console.log(response.data.name)
            setResponse(`Hey ${response.data.name} you are now logged in!`)
        })
}

    return (
        <div className='main-container'>
            <div className='input-form'>
           <input className='input-field'
           value={email}
           onChange={e => {setEmail(e.target.value)}}
           name='email'
           label='email'
           placeholder='email' />

           <input className='input-field'
           value={password}
           onChange={e => {setPassword(e.target.value)}}
           name='password'
           label='password'
           type='password'
           placeholder='password' />

           

        <div className='submit-btn' onClick={() => loginUser()}>Login</div>
        <h2 className='response'>{response}</h2>
        </div>
        </div>

    )
}

export default LoginForm
