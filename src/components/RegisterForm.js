import React, { useState } from 'react'
import axios from 'axios'
import './RegistrationForm.css'

const API_ENDPOINT = 'http://loginsignup-app.herokuapp.com'

function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState('')

    const Submit = async() => {

    await axios.post(`${API_ENDPOINT}/api/user/register`, {
        name: name, email: email, password: password
    }).then(function (response){
        console.log(response)
        setRes(`Hey ${name} you are now registered`)
    }).catch(function (error){
        console.log(error)
    })

    }
    return (
        <div className='main-container'>
            <div className='registration-form'>
            <div>
            <input className='input-field'
           value={name}
           onChange={e => {setName(e.target.value)}}
           name="name"
           label="name"
           placeholder="name" />
            </div>
           

           <div>
           <input className='input-field'
           value={email}
           onChange={e => {setEmail(e.target.value)}}
           name="email"
           label="email"
           placeholder="email" />
           </div>

           <div>
           <input className='input-field'
           value={password}
           onChange={e => {setPassword(e.target.value)}}
           name="password"
           label="password"
           type="password"
           placeholder="password" />
           </div>

        <div>
            <div className='submit-btn' onClick={() => Submit()}>Submit</div>
        </div>

        <h1>{res}</h1>
            </div>

        </div>
     
    )
}

export default RegisterForm
