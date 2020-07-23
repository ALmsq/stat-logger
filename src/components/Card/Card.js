import React from 'react'
import { Wrapper, Description, Title, Img, MMR} from './Card.styled.js'


const Card = ({title, deaths, stats, kills, img, gpm, damage, mmr}) => {
    return(
    
        <Wrapper>
            <MMR>MMR: {mmr}</MMR>
            <Title>{title}</Title>
            <Img src={img}/>
            <Description>{stats}</Description>
            <Description>Avg kills: {kills}</Description>
            <Description>Avg Deaths: {deaths}</Description>
            <Description>Avg GPM: {gpm}</Description>
            <Description>Damage Dealt: {damage}</Description>
        </Wrapper>
        
    )
}
export default Card