import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';

import {getFilms} from '../../apiCalls';

import {singleFilm} from '../../types';
import {searchResults} from '../../types';
import {getFilmsResults} from '../../types';

import {FaAward} from 'react-icons/fa';

interface props {
  searchResults: searchResults,
  setSearchResults: React.Dispatch<React.SetStateAction<searchResults>>,
  nominations: singleFilm[],
  toggleNomination: (film: singleFilm) => void,
}

const FilmsDisplay: React.FC<props> = ({searchResults, setSearchResults, nominations, toggleNomination}) => { 
//to disable showmorebutton while fetching
  const [disable, setDisable] = useState<boolean>(false);

  const handleGetMoreResults = async () : Promise<any> => {
  //if all possible results are already displayed, return
    if(parseInt(searchResults.count) <= searchResults.films.length) return;
    setDisable(true);
    
    let page = Math.floor(searchResults.films.length / 10) + 1;
    let results: getFilmsResults | string = await getFilms(searchResults.searchTerm, page);
    let newResults = [...searchResults.films];
    if(typeof results === 'object'){
      newResults = newResults.concat(results.films);
      setSearchResults({
        ...searchResults, 
        films: newResults,
      });
    }
    setDisable(false);
  }

  return (
    <StyledDiv> 
      <Gallery>
        {(searchResults?.films.length > 0)? searchResults.films.map((nom: singleFilm, id: number) => {
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
        {(parseInt(searchResults.count) > searchResults.films.length)?
          <MoreButton
            disabled={disable}
            onClick={()=>handleGetMoreResults()}
          >
            Show More
          </MoreButton>
        :''
        }
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
const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const MoreButton = styled.button`
  padding: .5rem;
  background: none;
  color: whitesmoke;
  font-family: 'Limelight', cursive;
  border-radius: .5rem;
`;