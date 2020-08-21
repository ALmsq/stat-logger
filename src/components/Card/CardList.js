import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import {Title} from './Card.styled'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
// import { Skeleton } from 'antd'
import { setGlobal } from 'reactn'


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
const CardList = () => {

    const API_KEY = process.env.REACT_APP_KEY

    const [name, setName] = useState('');
    const [all, setAll] = useState([])
    const [profile, setProfile] = useState([])
    const [matchData, setMatchData] = useState([])
    const timeoutRef = useRef(null)
    const [salsaPic, setSalsaPic] = useState('')
    
    

    

    let average = (array) => array.reduce((a, b) => a + b) / array.length
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        let steam = []
        if(timeoutRef.current !== null){
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null

            fetch(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=76561198037517308`, {
                
            })
            .then(res => res.json())
            .then((data) =>{
            steam = [...steam, data]
            setSalsaPic(steam[0].response.players[0].avatarfull)

            
        })

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
    },[API_KEY])
    ////////////////////////////////////////////////////
    const [name1, setName1] = useState('');
    const [all1, setAll1] = useState([])
    const [profile1, setProfile1] = useState([])
    const [matchData1, setMatchData1] = useState([])
    const timeoutRef1 = useRef(null)
    const [psyPic, setPsyPic] = useState('')
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        let steam = []
        
        if(timeoutRef1.current !== null){
            clearTimeout(timeoutRef1.current)
        }
        timeoutRef1.current = setTimeout(() => {
            timeoutRef1.current = null

            fetch(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=76561198090536594`)
            .then(res => res.json())
            .then((data) =>{
            steam = [...steam, data]
            setPsyPic(steam[0].response.players[0].avatarfull)

            
        })

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
    },[API_KEY])
    ///////////////////////////////////////////////////
    const [name2, setName2] = useState('');
    const [all2, setAll2] = useState([])
    const [profile2, setProfile2] = useState([])
    const [devPic, setDevPic] = useState('')
    const [matchData2, setMatchData2] = useState([])
    const timeoutRef2 = useRef(null)
    
    useEffect(() =>{
        let info = []
        let match = []
        let deaths = []
        let steam = []
        if(timeoutRef2.current !== null){
            clearTimeout(timeoutRef2.current)
        }
        timeoutRef2.current = setTimeout(() => {
            timeoutRef2.current = null

            fetch(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=76561198087538983`)
            .then(res => res.json())
            .then((data) =>{
            steam = [...steam, data]
            setDevPic(steam[0].response.players[0].avatarfull)

            
        })
            
            fetch('https://api.opendota.com/api/players/127273255')
            .then(res => res.json())
            .then((data) =>{
                info = [...info, data]
                setName2(info[0].profile.personaname)
            // setProfile2(info[0].profile)
            setProfile2(info)
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
    
    },[API_KEY])


    ////REACTN////
    setGlobal({
        profile: profile,
        profile1: profile1,
        profile2: profile2,
        salsaPic: salsaPic,
        psyPic: psyPic,
        devPic: devPic,
    })
/////////////

    const avgDeaths = (data) =>{
        let deaths = []
        let avg = 0
        data.map(stats => {deaths = [...deaths, stats.deaths]
            return(avg = average(deaths))
        })
        return(
           (avg)
        )
    }
    const avgGpm = (data) =>{
        let gpm = []
        let avg = 0
        data.map(stats => {gpm = [...gpm, stats.gold_per_min]
            return(avg = average(gpm))
        })
        return(
           (avg)
        )
    }

    const avgDmg = (data) =>{
        let dmg = []
        let avg = 0
        data.map(stats => {dmg = [...dmg, stats.hero_damage]
            return(avg = average(dmg))
        })
        return(
           (avg)
        )
    }

    const avgKills = (data) =>{
        let kills = []
        let avg = 0
        data.map(stats => {kills = [...kills, stats.kills]
            return(avg = average(kills))
        })
        return(
           (avg)
        )
    }
    
    
    
    return(
        <div style={{marginTop: '50px'}}>
        {/* {console.log(all.estimate)}
        {console.log(profile)}
        {console.log('M',matchData1)}
    {console.log(avgGpm(matchData))} */}

            <Title main> Stats </Title>
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
                <Skeleton variant="circle" width={50} height={50} style={{marginLeft: 'auto', marginRight: 'auto' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={150} style={{marginLeft: 'auto', marginRight: 'auto', borderRadius: '6px'}} />
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
                <Skeleton variant="circle" width={50} height={50} style={{marginLeft: 'auto', marginRight: 'auto' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={150} style={{marginLeft: 'auto', marginRight: 'auto', borderRadius: '6px'}} />
                </LoadDiv>}

                {name2? (<Card
                mmr={all2.estimate} 
                title={name2} 
                deaths={avgDeaths(matchData2)} 
                // stats={'stats'} ≈
                img={devPic} 
                gpm={avgGpm(matchData2)} 
                damage={avgDmg(matchData2)} 
                kills={avgKills(matchData2)} />) : 
                <LoadDiv>
                <Skeleton variant="text" width={50}/>
                <br></br>
                <Skeleton variant="text" height={40} />
                <br></br>
                <Skeleton variant="circle" width={50} height={50} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                <br></br>
                <Skeleton variant="rect" width={200} height={150} style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '6px'}} />
                </LoadDiv>}
                
                
            </Wrapper>
        </div>
    )
}
export default CardList