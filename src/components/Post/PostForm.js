import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Form, Input, Button} from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'



const layout = {

    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 7,
      span: 16,
    },
  };

  
  const PostForm = (props) => {

    const user = useSelector(state => state.auth.user)

    const onFinish = values => {
      console.log('Success:', values);
      console.log(values.Name)
      console.log(values.Post)
      axios.post('https://stat-tracker-backend.herokuapp.com/posts', {
          name: user.username,
          post: values.Post
      })
      .then((res) => {
          console.log(res)
      })
      .catch((err) =>{
          console.log(err)
      })
      setTimeout(() => {          //tries to reload before post request
        window.location.reload()
      }, 10);

    };

    
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Row>
        <Col span={8}></Col>
        <Col span={8}
        style={{
          display: 'flex',
          justifyContent: 'left'
        }}>
        <Form 
        {...layout}

        name="basic"
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {/* <Form.Item
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
        </Form.Item> */}
  
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
          <Input.TextArea
          autoSize={true}
          rows={3}
          cols={63}
          allowClear={true} />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
    );
  };
 
export default PostForm;