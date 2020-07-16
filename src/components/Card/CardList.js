import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import {Title} from './Card.styled'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'


const CardList = () => {

    const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;
    const LoadDiv = styled.div`
        width: 250px;
        height: 250px;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem;
        background-color: #00000057;
    `

    const [name, setName] = useState('');
    const [profile, setProfile] = useState([])
    const [matchData, setMatchData] = useState([])
    const timeoutRef = useRef(null)
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        if(timeoutRef.current !== null){
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null
            fetch('https://api.opendota.com/api/players/77251580')
        .then(res => res.json())
        .then((data) =>{
            info = [...info, data]
            setName(info[0].profile.personaname)
            setProfile(info[0].profile)
            console.log(info[0].profile)
        })
            fetch('https://api.opendota.com/api/players/77251580/recentmatches')
            .then(res => res.json())
            .then((data) =>{
                match = [...match, data]
                setMatchData(match)
                match[0].map(stats => deaths = [...deaths, stats.deaths])
                console.log(match[0])
                console.log(deaths.length)
                let average = (array) => array.reduce((a, b) => a + b) / array.length
                console.log('avg:', average(deaths))

            })
        }, 1000)
        
    },[])
    
    
    
    return(
        <>
        {console.log(profile)}
            <Title main> Our Stats </Title>
            <Wrapper>
                
                {name? (<Card title={name} description={'description'} stats={'stats'} img={profile.avatarfull} />) : 
                <LoadDiv>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={250} height={200} />
                </LoadDiv>}
                
                
            </Wrapper>
        </>
    )
}
export default CardList