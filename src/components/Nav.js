import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <nav className='nav-bar'>
            <div className='links'>
                <Link className='auth-link' to='/login'>
                    <div>Login</div>
                </Link>
            </div>

            <div className='links' to='/register'>
                <Link className='auth-link' to='/register'>
                    <div>Signup</div>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
