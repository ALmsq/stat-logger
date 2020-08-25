import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../Redux/Actions/authActions'
import { useHistory } from 'react-router-dom'

import LoginBackground from './LoginBackground'
import { FormDiv, Wrapper } from './Login.styled'
import { Row, Col, Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'


const Register = (props) => {

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const [registration, setRegistration] = useState({
        username: '',
        password: '',
        password2: '',
    })

    const onChange = e => {
        setRegistration({ ...registration, [e.target.name]: e.target.value})
        console.log(registration)
      }

    const history = useHistory()
    const onFinish = values => {
        console.log('Success:', values);
        console.log(values.password)
        console.log(values.username)
        
        dispatch(registerUser(registration, history))
        // history.push('/login')
      };

    useEffect(() => {
        if(auth.isAuthenticated){
            history.push('/')
            window.location.reload() // refresh body = hidden to enable scroll
        }
    })

      

      

      
      
    
    const {username, password, password2 } = registration
    
    return(
        <Wrapper>
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
                            }}> 
                            <div style={{textAlign: 'left'}}><a href='/'>back</a></div>
                            <div>REGISTER</div>
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
                                    <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                <Form.Item
                                    name="password2"
                                    value={password2}
                                    onChange={onChange}
                                    rules={[{ required: true, message: 'Please confirm your Password!' }]}
                                >
                                    <Input
                                    name='password2'
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Confirm Password"
                                    />
                                </Form.Item>
                                

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                    Register
                                    </Button>
                                    <div style={{marginTop: '20px'}}>
                                        Already have an account? <a href='/login' >Log in</a>
                                    </div>
                                    
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </FormDiv>
            
    </Wrapper>
    )
}
export default Register