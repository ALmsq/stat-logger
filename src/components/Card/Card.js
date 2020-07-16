import React from 'react'
import { Wrapper, Description, Title, Img} from './Card.styled.js'


const Card = ({title, description, stats, img}) => {
    return(
    
        <Wrapper>
            <Title>{title}</Title>
            <Img src={img}/>
            <Description>{stats}</Description>
            <Description>{description}</Description>
        </Wrapper>
        
    )
}
export default Card