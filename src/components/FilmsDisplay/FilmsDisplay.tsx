import React from 'react'; 
import styled from 'styled-components'; 

interface props {
  searchResults: string[],
  nominations: string[],
  toggleNomination: (film: string | null) => void,
}

const FilmsDisplay: React.FC<props> = ({searchResults, nominations, toggleNomination}) => { 
  console.log('FDsearchResults', searchResults);
  return (
    <StyledDiv> 
      <div> FilmsDisplay </div>
      {(searchResults?.length > 0)? searchResults.map((nom: string, id: number) => {
        return (
          <div
            key={id}
          >
            <p>
              {nom}
            </p>
            <button
              onClick={()=>toggleNomination(nom)}
              disabled={nominations.includes(nom) || (nominations.length > 4)}
            >
              Nominate
            </button>
          </div>
        )
      })
      : ''}
    </StyledDiv> 
  ) 
}; 


export default FilmsDisplay;


const StyledDiv = styled.div`
  margin: 1rem;
  background: slategray;
`;