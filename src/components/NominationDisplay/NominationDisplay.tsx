import React from 'react'; 
import styled from 'styled-components'; 

// interface nomination {
//   [key: string]: string
// };
interface props {
  nominations: string[],
  toggleNomination: (film: string | null) => void,
}

const NominationDisplay: React.FC<props> = ({nominations, toggleNomination}) => { 

  return (
    <StyledDiv> 
      <div> NominationDisplay </div>
      {(nominations.length)? nominations.map((nom: string, id: number) => {
        return (
          <div
            key={id}
          >
            <p>
              {nom}
            </p>
            <button
              onClick={()=>toggleNomination(nom)}
            >
              Un-Nominate
            </button>
          </div>
        )
      })
      : ''}
    </StyledDiv> 
  ) 
}; 


export default NominationDisplay;


const StyledDiv = styled.div`
  margin: 1rem;
  background: silver;
  color: darkslategray;
`;