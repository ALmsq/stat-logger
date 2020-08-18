import React from 'react'
import './LoginBackground.scss'


const LoginBackground = () => {   
    return(
       <div style={{position: 'absolute'}}>
           <div style={{display: 'none'}}>
           {window.location.pathname === '/login' ? document.body.style.overflow = 'hidden' : 'auto'}
           </div>
            <div className='background'>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
       </div>
    )
}

export default LoginBackground
