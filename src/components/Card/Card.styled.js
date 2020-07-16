import styled from 'styled-components'



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: ${props => (props.main ? "black" : "white")};
  text-align: center;
`;

export const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;

    
`

export const Description = styled.p`
  color: white;
  text-align: center;
`;


