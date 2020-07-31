import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'



const layout = {

    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
  const PostForm = (props) => {

    const onFinish = values => {
      console.log('Success:', values);
      console.log(values.Name)
      console.log(values.Post)
      axios.post('http://localhost:4000/posts', {
          name: values.Name,
          post: values.Post
      })
      .then((res) => {
          console.log(res)
      })
      .catch((err) =>{
          console.log(err)
      })
      window.location.reload()
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form 
        {...layout}

        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Post"
          name="Post"
          rules={[
            {
              required: true,
              message: 'Please input your Post!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
 
export default PostForm;