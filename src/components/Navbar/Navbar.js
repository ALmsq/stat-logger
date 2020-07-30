import React from 'react'
import { Nav, NavDiv, ProfileDiv } from './Navbar.styled'
import { Affix } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const NavBar = () => {
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
                            <a href='/login'>login</a>
                        </div>
                    </ProfileDiv>
                </NavDiv>
            </Nav>
        </Affix>
    )
}

export default NavBar