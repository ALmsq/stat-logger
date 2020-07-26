import React, { useState, useEffect, useRef, useCallback } from 'react'
import PostForm from './PostForm'
import { Button, List, Avatar } from 'antd'
import axios from 'axios'
import { useGlobal } from 'reactn'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { useForkRef } from '@material-ui/core'


const Posts = (props) => {

    const [post, setPost] = useState([])
    const [count, setCount] = useState(0)
    
    useEffect(() =>{
        let arr = []
        fetch('http://localhost:4000/posts')
        .then(res => res.json())
        .then((data) =>{
          setPost(data)
          console.log(data)
        })
        console.log(post.map(m => m.like))
        arr = [...arr, post.map(m => m.like)]
        
      },[count])


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

    
    const [postId, setPostId] = useState('')
    
    const handleLike = useCallback((e, post) => {
        
        let likeNum = 0
        setPostId(post._id)
        axios.get(`http://localhost:4000/post/${post._id}`)
        .then((res) =>{
            likeNum = res.data.like
            setCount(res.data.like)
        })
        .catch((error) =>{
            console.log(error)
        })
            
            setTimeout(() => {
                axios.put(`http://localhost:4000/post/${post._id}`, {
                like: likeNum + 1
            })
            .then((res) =>{
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
            
            }, 100);

            console.log(props.post.map(m => m.like))
               
        })

        

    const handleDislike = (e, post) => {
        console.log(post)

        }

    
    const [posts, setPosts] = useState([])


    const [profile, setProfile] = useGlobal('profile')
    const [profile1, setProfile1] = useGlobal('profile1')
    const [profile2, setProfile2] = useGlobal('profile2')

    let all = []
    all = [...all, profile, profile1, profile2]

    let image = ''

    



    return (
        <div>
            

            <PostForm/>

            <List
                style={{marginLeft: '15%', marginRight: '15%', marginBottom: '5%'}}
                itemLayout="horizontal"
                dataSource={post}
                renderItem={item => {
                    
                    {if(item.name.toUpperCase() === 'PkSalsa'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/04/04b36c6ea07c7747f4da718a5a2f33dcfa695abf_full.jpg"
                    }else if(item.name.toUpperCase() == 'Psychotic'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/27/27b0405249110d7edf10bfc7c99414f2d720e02d_full.jpg"
                    }else if(item.name.toUpperCase() == 'PkChips'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e86ceb7ed6d7d152a074a6d77ec826fc9247700_full.jpg"
                    }else{
                        image = "https://image.flaticon.com/icons/svg/3166/3166680.svg"
                    }
                }
                
                    return(
                        <List.Item key={item._id}>
                        <List.Item.Meta
                        

                      avatar={<Avatar src={image}  />}
                      title={item.name}
                      description={item.post}
                    />
                    
                    <div onClick={(e => {
                        handleLike(e, item)
                        console.log(item.like)
                        setCount(count + 1)
                    })}

                    style={{marginRight: '5px'}}
                    
                    key={item._id}>
                        <Button type='primary' size='small' shape='circle' icon={<LikeOutlined/>}/><div style={{textAlign: 'center'}}>{item.like}</div></div>

                    <div style={{marginRight: '5px'}}>
                        <Button onClick={e => handleDislike(e, item)} type='primary' size='small' shape='circle' icon={<DislikeOutlined/>} danger/><div style={{textAlign: 'center'}}>{item.dislike}</div></div>

                    <Button onClick={e => handleDelete(e, item)} size='small' danger>Delete</Button>
                  </List.Item>
                    )
                }}
            />

        </div>
     )
}

export default Posts;
