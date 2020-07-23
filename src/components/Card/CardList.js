import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import {Title} from './Card.styled'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
// import { Skeleton } from 'antd'




const CardList = () => {

    const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    `;
    const LoadDiv = styled.div`
        
        width: 250px;
        height: 380px;
        border-radius: 4px;
        padding: 1rem;
        margin: 2rem;
        background-color: #00000057;
    `

    const [name, setName] = useState('');
    const [all, setAll] = useState([])
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
            setAll(info[0].mmr_estimate)
            
        })
            fetch('https://api.opendota.com/api/players/77251580/recentmatches')
            .then(res => res.json())
            .then((data) =>{
                match = [...match, data]
                setMatchData(match[0])
                match[0].map(stats => deaths = [...deaths, stats.deaths])
            })
        }, 2000)  
    },[])
    ////////////////////////////////////////////////////
    const [name1, setName1] = useState('');
    const [all1, setAll1] = useState([])
    const [profile1, setProfile1] = useState([])
    const [matchData1, setMatchData1] = useState([])
    const timeoutRef1 = useRef(null)
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        if(timeoutRef1.current !== null){
            clearTimeout(timeoutRef1.current)
        }
        timeoutRef1.current = setTimeout(() => {
            timeoutRef1.current = null
            fetch('https://api.opendota.com/api/players/130270866')
        .then(res => res.json())
        .then((data) =>{
            info = [...info, data]
            setName1(info[0].profile.personaname)
            setProfile1(info[0].profile)
            setAll1(info[0].mmr_estimate)
            
        })
            fetch('https://api.opendota.com/api/players/130270866/recentmatches')
            .then(res => res.json())
            .then((data) =>{
                match = [...match, data]
                setMatchData1(match[0])
                match[0].map(stats => deaths = [...deaths, stats.deaths])
            })
        }, 2000)  
    },[])
    ///////////////////////////////////////////////////
    const [name2, setName2] = useState('');
    const [all2, setAll2] = useState([])
    const [profile2, setProfile2] = useState([])
    const [matchData2, setMatchData2] = useState([])
    const timeoutRef2 = useRef(null)
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        if(timeoutRef2.current !== null){
            clearTimeout(timeoutRef2.current)
        }
        timeoutRef2.current = setTimeout(() => {
            timeoutRef2.current = null
            fetch('https://api.opendota.com/api/players/127273255')
        .then(res => res.json())
        .then((data) =>{
            info = [...info, data]
            setName2(info[0].profile.personaname)
            setProfile2(info[0].profile)
            setAll2(info[0].mmr_estimate)
            
        })
            fetch('https://api.opendota.com/api/players/127273255/recentmatches')
            .then(res => res.json())
            .then((data) =>{
                match = [...match, data]
                setMatchData2(match[0])
                match[0].map(stats => deaths = [...deaths, stats.deaths])
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

    const avgKills = (data) =>{
        let kills = []
        let avg = 0
        data.map(stats => {kills = [...kills, stats.kills]
            avg = average(kills)
        })
        return(
           (avg)
        )
    }
    
    
    
    return(
        <div style={{marginTop: '100px'}}>
        {/* {console.log(all.estimate)}
        {console.log(profile)}
        {console.log('M',matchData1)}
        {console.log(avgGpm(matchData))} */}
            <Title main> Birdgang </Title>
            <Wrapper>
                
                {name? (<Card
                mmr={all.estimate} 
                title={name} 
                deaths={avgDeaths(matchData)} 
                // stats={'stats'} 
                img={profile.avatarfull} 
                gpm={avgGpm(matchData)} 
                damage={avgDmg(matchData)}
                kills={avgKills(matchData)} />) : 
                <LoadDiv>
                <Skeleton variant="text" width={50}/>
                <br></br>
                <Skeleton variant="text" height={40} />
                <br></br>
                <Skeleton variant="circle" width={50} height={50} style={{marginLeft: '100px' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={200} style={{marginLeft: 'auto', marginRight: 'auto'}} />
                </LoadDiv>}
                
                {name1? (<Card
                mmr={all1.estimate} 
                title={name1} 
                deaths={avgDeaths(matchData1)} 
                // stats={'stats'} 
                img={profile1.avatarfull} 
                gpm={avgGpm(matchData1)} 
                damage={avgDmg(matchData1)}
                kills={avgKills(matchData1)} />) : 
                <LoadDiv>
                <Skeleton variant="text" width={50}/>
                <br></br>
                <Skeleton variant="text" height={40} />
                <br></br>
                <Skeleton variant="circle" width={50} height={50} style={{marginLeft: '100px' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={200} style={{marginLeft: 'auto', marginRight: 'auto'}} />
                </LoadDiv>}

                {name2? (<Card
                mmr={all2.estimate} 
                title={name2} 
                deaths={avgDeaths(matchData2)} 
                // stats={'stats'} ≈
                img={profile2.avatarfull} 
                gpm={avgGpm(matchData2)} 
                damage={avgDmg(matchData2)} 
                kills={avgKills(matchData1)} />) : 
                <LoadDiv>
                <Skeleton variant="text" width={50}/>
                <br></br>
                <Skeleton variant="text" height={40} />
                <br></br>
                <Skeleton variant="circle" width={50} height={50} style={{marginLeft: '100px' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={200} style={{marginLeft: 'auto', marginRight: 'auto'}} />
                </LoadDiv>}
                
                
            </Wrapper>
        </div>
    )
}
export default CardList