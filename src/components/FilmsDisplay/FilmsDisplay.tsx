import React from 'react'; 
import styled from 'styled-components'; 

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';
import {singleFilm} from '../../types';

import {FaAward} from 'react-icons/fa';

interface props {
  searchResults: singleFilm[],
  nominations: singleFilm[],
  toggleNomination: (film: singleFilm) => void,
}

const FilmsDisplay: React.FC<props> = ({searchResults, nominations, toggleNomination}) => { 
  
  return (
    <StyledDiv> 
      <DisplayCount>
        {(searchResults?.length > 0)? `Showing ${searchResults.length} results:` : ''} 
      </DisplayCount>
      <Gallery>
        {(searchResults?.length > 0)? searchResults.map((nom: singleFilm, id: number) => {
          return (
            <FilmCard
              key={nom.imdbID}
              title={nom.Title}
              year={nom.Year}
              poster={nom.Poster}
            >
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
`;
const DisplayCount = styled.p`
  font-family: 'Limelight', cursive;
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;