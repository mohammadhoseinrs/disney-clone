import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Login.css'

export default function Login() {
  return (
    <div className='login__container'>
        <div className='login__content'>
            <div className='login__content-inner'>
                <img src="./images/cta-logo-one.svg" alt="" />
                <a href="">GET ALL THERE</a>
                <p>
                Get Premier Access to Raya and the Last Dragon for an additional fee
                 with a Disney+ subscription. As of 03/26/21, the price of Disney+
                 and The Disney Bundle will increase by $1.
                </p>
                <img src="./images/cta-logo-two.png" alt="" />
            </div>
            <div className="login__background"></div>
        </div>
    </div>
    
  )
}
