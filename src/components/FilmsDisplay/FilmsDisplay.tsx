import React from 'react'; 
import styled from 'styled-components'; 

interface props {
  toggleNomination: (film: string | null) => void,
}

const FilmsDisplay: React.FC<props> = (toggleNomination) => { 

  return (
    <StyledDiv> 
      <div> FilmsDisplay </div>
    </StyledDiv> 
  ) 
}; 


export default FilmsDisplay;


const StyledDiv = styled.div`
  margin: 1rem;
  background: slategray;
`;