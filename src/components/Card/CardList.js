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
        height: 350px;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem;
        background-color: #00000057;
    `

    const [name, setName] = useState('');
    const [profile, setProfile] = useState([])
    const [matchData, setMatchData] = useState([])
    const timeoutRef = useRef(null)

    let average = (array) => array.reduce((a, b) => a + b) / array.length
    
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
                setMatchData(match[0])
                match[0].map(stats => deaths = [...deaths, stats.deaths])
                
                console.log('avg:', average(deaths))
            })
        }, 2000)
        
    },[])

    const avgDeaths = (data) =>{
        let deaths = []
        let avg = 0
        data.map(stats => {deaths = [...deaths, stats.deaths]
            avg = average(deaths)
        })
        return(
           (avg)
        )
    }
    const avgGpm = (data) =>{
        let gpm = []
        let avg = 0
        data.map(stats => {gpm = [...gpm, stats.gold_per_min]
            avg = average(gpm)
        })
        return(
           (avg)
        )
    }

    const avgDmg = (data) =>{
        let dmg = []
        let avg = 0
        data.map(stats => {dmg = [...dmg, stats.hero_damage]
            avg = average(dmg)
        })
        return(
           (avg)
        )
    }
    
    
    
    return(
        <>
        {console.log(profile)}
        {console.log('M',matchData)}
        {console.log(avgGpm(matchData))}
            <Title main> Our Stats </Title>
            <Wrapper>
                
                {name? (<Card 
                title={name} 
                deaths={avgDeaths(matchData)} 
                stats={'stats'} 
                img={profile.avatarfull} 
                gpm={avgGpm(matchData)} 
                damage={avgDmg(matchData)} />) : 
                <LoadDiv>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={250} height={290} />
                </LoadDiv>}
                
                
            </Wrapper>
        </>
    )
}
export default CardList