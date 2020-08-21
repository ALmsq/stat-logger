import React from 'react'
import './LoginBackground.scss'
import {RemoveScroll} from 'react-remove-scroll'


const LoginBackground = () => {   
    return(
       <div style={{position: 'absolute'}}>
           <div style={{display: 'none'}}>
           {/* {window.location.pathname === '/login' ? document.body.style.overflow = 'hidden' : 'auto'} */}
           <RemoveScroll></RemoveScroll>
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
