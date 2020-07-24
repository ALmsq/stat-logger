import React, { useState, useEffect } from 'react'
import PostForm from './PostForm'
import { Button, List, Avatar } from 'antd'
import axios from 'axios'

        {/* <ul>
        <li key={post._id}>{post.post}</li><Button  onClick={e => handleDelete(e, post)} type="submit" danger>delete</Button>
        </ul> */}

const Posts = (props) => {

    
    useEffect(()=>{
        
    })

    const handleDelete = (e, post) => {
        console.log(post._id)
        axios.delete(`http://localhost:4000/post/${post._id}`)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
        window.location.reload()
    }
    
    

    return ( 
        <div>
            <PostForm/>

            <List
                itemLayout="horizontal"
                dataSource={props.post}
                renderItem={item => (
                    
                  <List.Item key={item._id}>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={item.name}
                      description={item.post}
                    />
                    <Button onClick={e => handleDelete(e, item)} danger>Delete</Button>
                  </List.Item>
                  
                )}
            />

        </div>
     )
}
 
export default Posts;