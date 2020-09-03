import React, { PropsWithChildren } from 'react'; 
import styled from 'styled-components'; 


interface props {

};

const FilmCard: React.FC<PropsWithChildren<props>> = ({children}) => { 

  return (
    <StyledDiv> 
      {children}
    </StyledDiv> 
  ) 
}; 


export default FilmCard;


const StyledDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: .5rem;
  margin: .5rem;
  background: whitesmoke;
  border-radius: .5rem;
  color: darkslategray;
`;