import React from 'react'; 
import styled from 'styled-components'; 

interface nomination {
  [key: string]: string
};
interface props {
  nominations: nomination[] | null
}

const NominationDisplay: React.FC<props> = (nominations) => { 

  return (
    <StyledDiv> 
      <div> NominationDisplay </div>
    </StyledDiv> 
  ) 
}; 


export default NominationDisplay;


const StyledDiv = styled.div`
  margin: 1rem;
  background: silver;
  color: darkslategray;
`;