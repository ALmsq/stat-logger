import React from 'react'
import LoginBackground from './LoginBackground'
import { FormDiv, Wrapper } from './Login.styled'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import axios from 'axios'

const Register = (props) => {

    const onFinish = values => {
        console.log('Success:', values);
        console.log(values.password)
        console.log(values.username)
        axios.get('http://localhost:4000/api/auth/user')
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
        // window.location.reload()
      };

      

      
      
    


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
                            }}> REGISTER
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                  onFinish={onFinish}
                                >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>
                                

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                    </Button>
                                    
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