import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../Redux/Actions/authActions'
import { useHistory } from 'react-router-dom'

import LoginBackground from './LoginBackground'
import { FormDiv, Wrapper } from './Login.styled'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import axios from 'axios'

const Login = (props) => {
    const user = useSelector(state => state.auth.user )
    const auth = useSelector(state => state.auth)
    const errors = useSelector(state => state.errors)
    

    const dispatch = useDispatch()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const onChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value})
        console.log(login)
    }

    const history = useHistory()
    const onFinish = values => {
        console.log('Success:', values);
        console.log(values.password)
        console.log(values.username)
        dispatch(loginUser(login))
        console.log(props)
        console.log(user.username)
        if(auth.isAuthenticated){
            history.push('/')}
      };

      const logoutClick = () => {
          dispatch(logoutUser())
      }

      useEffect(() => {
        if(auth.isAuthenticated){
            history.push('/')
            window.location.reload() // refresh body = hidden to enable scroll
        }else if(errors.usernamenotfound){
            alert(errors.usernamenotfound)
        }
      }, [errors, auth])

      const handleRegister = () => {
        history.push('/register')
      }
      

    const {username, password} = login

    return(
        <Wrapper>
        {/* {getUsers()} */}
        <LoginBackground/>
            <FormDiv className='FormDiv'>
                <Row>
                    <Col span={8}></Col>
                    <Col style={{
                        textAlign: 'center',
                        top: '200px',
                        width: 'auto',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#F5F0F6',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                        opacity: '90%'
                        }} span={8}>
                        <div style={{
                            height: 'auto', 
                            width: 'auto',
                            margin: '25px'
                            }}> LOGIN
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                  onFinish={onFinish}
                                >
                                <Form.Item
                                    name="username"
                                    value={username}
                                    onChange={onChange}
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input name='username' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    name='password'
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>
                                

                                <Form.Item>
                                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                        </Button>
                                        <div>
                                            
                                        </div>
                                        <Button onClick={handleRegister} type="primary" className="login-form-button">
                                        Register
                                        </Button>
                                    </div>
                                    
                                </Form.Item>
                                {/* <div onClick={logoutClick}>
                                    logout
                                </div>
                                <div>
                                    {user.username ? user.username : ''}
                                </div> */}
                                
                            </Form>
                        </div>
                    </Col>
                </Row>
            </FormDiv>
            
    </Wrapper>
    )
}
export default Login