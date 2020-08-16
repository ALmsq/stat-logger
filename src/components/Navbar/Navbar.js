import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, NavDiv, ProfileDiv } from './Navbar.styled'
import { Affix } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { logoutUser } from '../../Redux/Actions/authActions'



const NavBar = () => {
    
    const dispatch = useDispatch()
    const logoutClick = () => {
        dispatch(logoutUser())
    }

    const user = useSelector(state => state.auth.user)
    console.log(user.username? 'yo' : 'nothing')
    return(
        <Affix>
            <Nav>
                <NavDiv>
                    
                </NavDiv>
                <NavDiv>
                    <h3>Stat App</h3>
                </NavDiv>
                <NavDiv>
                    <ProfileDiv>
                        <div>
                            <UserOutlined/>
                        </div>
                    </ProfileDiv>
                    <ProfileDiv>
                        <div>
                            {user.username? user.username : <a href='/login'>login</a>}
                        </div>
                    </ProfileDiv>
                    <ProfileDiv>
                        <div>
                            {user.username? null : <a href='/register'>register</a>}
                        </div>
                    </ProfileDiv>


                    {user.username? <ProfileDiv>
                        <div onClick={logoutClick}>
                            <a>logout</a>
                        </div>
                    </ProfileDiv>: null}

                </NavDiv>
            </Nav>
        </Affix>
    )
}

export default NavBar