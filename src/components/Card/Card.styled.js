import styled from 'styled-components'



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 380px;
  background-color: #724E91;

  background: linear-gradient(0deg, rgba(207,58,57,1) 0%, rgba(235,80,52,1) 100%);

  border-radius: 4px;
  padding: 1rem;
  margin: 2rem;
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
  
  text-align: center;
  color: black;
`;

export const MMR = styled.p`
  color: black;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
`

