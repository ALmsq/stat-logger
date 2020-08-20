import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, NavDiv, ProfileDiv, Img, AvatarImg } from './Navbar.styled'
import { Affix } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { logoutUser } from '../../Redux/Actions/authActions'
import { useGlobal } from 'reactn'



const NavBar = () => {
    
    const dispatch = useDispatch()
    const logoutClick = () => {
        dispatch(logoutUser())
    }
    const [salsaPic] = useGlobal('salsaPic')
    const [psyPic] = useGlobal('psyPic')
    const [devPic] = useGlobal('devPic')



    const user = useSelector(state => state.auth.user)


    return(
        <Affix>
        
            <Nav>
                <NavDiv>
                    
                </NavDiv>
                <NavDiv style={{marginTop: '8px'}} >
                    <Img src='https://image.flaticon.com/icons/svg/588/588267.svg' style={{marginRight: '10px', marginBottom: '3px'}} />
                    <h3 style={{marginTop: '3px'}} >Stat Tracker</h3>
                </NavDiv>
                <NavDiv>
                    <ProfileDiv>
                        <div>
                        
                        {/* {user.username? <AvatarImg src={image}/> : <UserOutlined/>} */}
                        {user.username? user.username.toUpperCase() === 'pksalsa'.toUpperCase()? (<AvatarImg src={salsaPic}/>)
                        : user.username.toUpperCase() === 'Psychotic'.toUpperCase()? (<AvatarImg src={psyPic}/>)
                        : user.username.toUpperCase() === 'PkChips'.toUpperCase()? (<AvatarImg src={devPic}/>)
                        : null : <UserOutlined/>}
                                                
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
                            <a href='/#'>logout</a>
                        </div>
                    </ProfileDiv>: null}

                </NavDiv>
            </Nav>
        </Affix>
    )
}

export default NavBar