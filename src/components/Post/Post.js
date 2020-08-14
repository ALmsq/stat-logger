import React, { useState, useEffect, useRef, useCallback } from 'react'
import PostForm from './PostForm'
import { Button, List, Avatar, Divider } from 'antd'
import axios from 'axios'
import { useGlobal } from 'reactn'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { useForkRef } from '@material-ui/core'


const Posts = (props) => {

    const [post, setPost] = useState([])
    const [count, setCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    const [postId, setPostId] = useState('')
    const [postId2, setPostId2] = useState('')
    
    


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

    
    
    const handleLike = (e, post) => {
        setPostId(post._id)
        
        axios.put(`http://localhost:4000/post/${post._id}`, {
                like: post.like+1
            })
            .then((res) =>{
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
               
        }

    const handleDislike = (e, post) => {
        setPostId2(post._id)
            axios.put(`http://localhost:4000/post/${post._id}`, {
                dislike: post.dislike+1
            })
            .then((res) =>{
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
            
            }

        useEffect(() =>{
            
            fetch(`http://localhost:4000/post/${postId}`)
            .then(res => res.json())
            .then((data) =>{
              
              console.log('fetched likes ', data.like)
            })
          },[postId])

        useEffect(() => {
            fetch(`http://localhost:4000/post/${postId2}`)
            .then(res => res.json())
            .then((data) =>{
              
              console.log('fetched dislikes ', data.dislike)
            })
        }, [postId2])

        

    

    
    const [posts, setPosts] = useState([])


    const [profile, setProfile] = useGlobal('profile')
    const [profile1, setProfile1] = useGlobal('profile1')
    const [profile2, setProfile2] = useGlobal('profile2')

    let all = []
    all = [...all, profile, profile1, profile2]

    let image = ''

    //////////////////////////////////////////////////////
    //likes to setstate then --> to update backend with useeffect onchange
    /////////////////////////////////////////////////////

    const [likeCount, setLikeCount] = useState(0)








    



    return (
        <div>
            
            <PostForm/>

            <List
                style={{marginLeft: '15%', marginRight: '15%', marginBottom: '5%'}}
                itemLayout="horizontal"
                dataSource={props.post}
                renderItem={item => {
                    
                    {if(item.name.toUpperCase() === 'PkSalsa'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/04/04b36c6ea07c7747f4da718a5a2f33dcfa695abf_full.jpg"
                    }else if(item.name.toUpperCase() === 'Psychotic'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/27/27b0405249110d7edf10bfc7c99414f2d720e02d_full.jpg"
                    }else if(item.name.toUpperCase() === 'PkChips'.toUpperCase()){
                        image = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e86ceb7ed6d7d152a074a6d77ec826fc9247700_full.jpg"
                    }else{
                        image = "https://image.flaticon.com/icons/svg/3166/3166680.svg"
                    }
                }
                
                    return(
                        <List.Item style={{borderBottom: '1px solid #dadada' }} key={item._id}>
                        <List.Item.Meta
                        

                      avatar={<Avatar src={image}  />}
                      title={item.name}
                      description={item.post}
                    />
                    
                    <div onClick={(e => {
                        setCount(item.like)
                        handleLike(e, item)
                        console.log(count)
                    })}

                    style={{marginRight: '5px'}}
                    key={item._id}>
                        <Button type='submit' size='small' shape='circle' icon={<LikeOutlined/>}/><div style={{textAlign: 'center'}}>{(count >= 0 && item._id === postId ? count +1 : item.like)}</div></div>

                    <div onClick={(e => {
                        setDislikeCount(item.dislike)
                        handleDislike(e, item)
                        console.log(dislikeCount)
                    })}
                    style={{marginRight: '5px'}}
                    >
                        <Button type='primary' size='small' shape='circle' icon={<DislikeOutlined/>} danger/><div style={{textAlign: 'center', color: 'red'}}>{(dislikeCount >= 0 && item._id === postId2 ? dislikeCount +1 : item.dislike)}</div></div>

                    <Button onClick={e => handleDelete(e, item)} size='small' danger>Delete</Button>
                    
                  </List.Item>
                
                    )
                }}
            />

        </div>
     )
}

export default Posts;
