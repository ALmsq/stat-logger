import React, { useState, useEffect, useRef } from 'react'
import PostForm from './PostForm'
import { Button, List, Avatar } from 'antd'
import axios from 'axios'
import { useGlobal } from 'reactn'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { useForkRef } from '@material-ui/core'


const Posts = (props) => {




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

    const [count, setCount] = useState(0)
    const [postId, setPostId] = useState('')
    

    const handleLike = (e, post) => {
        
        setPostId(post._id)
        console.log(postId)
        let likeNum = 0
        setCount(count + 1)
        axios.get(`http://localhost:4000/post/${post._id}`)
        .then((res) =>{
            likeNum = res.data.like
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
            
            
        }

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
                dataSource={props.post}
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
                        
                        console.log(item._id)
                        })} style={{marginRight: '5px'}}><Button type='primary' size='small' shape='circle' icon={<LikeOutlined/>}/><div key={item._id} style={{textAlign: 'center'}}>{item._id == postId? item.like+count : item.like}</div></div>

                    <div style={{marginRight: '5px'}}><Button onClick={e => handleDislike(e, item)} type='primary' size='small' shape='circle' icon={<DislikeOutlined/>} danger/><div style={{textAlign: 'center'}}>{item.dislike}</div></div>

                    <Button onClick={e => handleDelete(e, item)} size='small' danger>Delete</Button>
                  </List.Item>
                    )
                }}
            />

        </div>
     )
}

export default Posts;
