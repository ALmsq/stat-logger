import styled from 'styled-components'



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 350px;
  background-color: #ACD7EC;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: #black;
  text-align: center;
`;

export const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
`

export const Description = styled.p`
  color: white;
  text-align: center;
  color: black;
`;


