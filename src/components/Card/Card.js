import React from 'react'
import { Wrapper, Description, Title, Img} from './Card.styled.js'


const Card = ({title, deaths, stats, img, gpm, damage}) => {
    return(
    
        <Wrapper>
            <Title>{title}</Title>
            <Img src={img}/>
            <Description>{stats}</Description>
            <Description>Avg Deaths: {deaths}</Description>
            <Description>Avg GPM: {gpm}</Description>
            <Description>Damage Dealt: {damage}</Description>
        </Wrapper>
        
    )
}
export default Card