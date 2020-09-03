import React from 'react'; 
import styled from 'styled-components'; 

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';

import {FaAward} from 'react-icons/fa';

interface props {
  searchResults: string[],
  nominations: string[],
  toggleNomination: (film: string | null) => void,
}

const FilmsDisplay: React.FC<props> = ({searchResults, nominations, toggleNomination}) => { 
  console.log('FDsearchResults', searchResults);
  return (
    <StyledDiv> 
      {/* <span>
        {(searchResults?.length > 0)? `${searchResults.length} Results:` : ''} 
      </span> */}
      <Gallery>
        {(searchResults?.length > 0)? searchResults.map((nom: string, id: number) => {
          return (
            <FilmCard
              key={id}
            >
              <p>
                {nom}
              </p>
              <NominateButtonWrap color={'goldenrod'}>
                <button
                  onClick={()=>toggleNomination(nom)}
                  disabled={nominations.includes(nom) || (nominations.length > 4)}
                >
                  <FaAward/>
                </button>
              </NominateButtonWrap>
              
            </FilmCard>
          )
        })
        : ''}
      </Gallery>
    </StyledDiv> 
  ) 
}; 


export default FilmsDisplay;


const StyledDiv = styled.div`
  grid-area: results;
  margin: 0 1rem 1rem;
  padding: .5rem;
  background: none;
  overflow-Y: auto;
  border-radius: .5rem;
  /* border: 3px ridge darkgoldenrod; */
  span{
    font-family: 'Limelight', cursive;
  }
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;