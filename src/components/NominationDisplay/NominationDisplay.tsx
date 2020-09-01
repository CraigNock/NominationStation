import React from 'react'; 
import styled from 'styled-components'; 

// interface nomination {
//   [key: string]: string
// };
interface props {
  nominations: string[] | null,
  toggleNomination: (film: string | null) => void,
}

const NominationDisplay: React.FC<props> = (nominations, toggleNomination) => { 

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