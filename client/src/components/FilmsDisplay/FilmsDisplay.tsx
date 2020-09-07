import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import { motion, AnimatePresence } from 'framer-motion';

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';
import Loader from '../Loader';

import {getFilms} from '../../apiCalls';

import {singleFilm} from '../../types';
import {searchResults} from '../../types';
import {getFilmsResults} from '../../types';
import {MEDIA_GATE} from '../../constants';


import {FaAward} from 'react-icons/fa';

interface props {
  searchResults: searchResults,
  setSearchResults: React.Dispatch<React.SetStateAction<searchResults>>,
  nominations: singleFilm[],
  toggleNomination: (film: singleFilm) => void,
  loading: boolean,
}

//// Display for film search results ////
const FilmsDisplay: React.FC<props> = ({searchResults, setSearchResults, nominations, toggleNomination, loading}) => { 
//to disable "Show More" button while fetching
  const [disable, setDisable] = useState<boolean>(false);

////Function to fetch more results when "Show More" is selected and add them to searchResults////
  const handleGetMoreResults = async () : Promise<any> => {
  //if all possible results are already displayed, return
    if(parseInt(searchResults.count) <= searchResults.films.length) return;
    setDisable(true);
    
    let page = Math.floor(searchResults.films.length / 10) + 1;
    let results: getFilmsResults | string = await getFilms(searchResults.searchTerm, page);
    let newResults = [...searchResults.films];
  //if there is an error; typeof results will be 'string'
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
      <AnimatePresence>
      <Gallery>
        {(searchResults.films?.length > 0)? searchResults.films.map((nom: singleFilm, id: number) => {
          return (
            <FilmCard
              key={nom.imdbID}
              index={id}
              title={nom.Title}
              year={nom.Year}
              poster={nom.Poster}
            >
              <NominateButtonWrap color={'goldenrod'}>
                <button
                  onClick={()=>toggleNomination(nom)}
                  disabled={((nominations.findIndex((entry:singleFilm)=> entry.imdbID === nom.imdbID)) !== -1) || (nominations.length > 4)}
                >
                  <FaAward/>
                </button>
              </NominateButtonWrap>
              
            </FilmCard>
          )
        })
        : ''}
        {(parseInt(searchResults.count) > searchResults.films?.length)?
          <MoreButton
            disabled={disable}
            onClick={()=>handleGetMoreResults()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Show More
          </MoreButton>
        : ''
        }
      </Gallery>
      </AnimatePresence>
      {(loading || disable) && <Loader/>}
    </StyledDiv> 
  ) 
}; 


export default FilmsDisplay;


const StyledDiv = styled.div`
  grid-area: results;
  margin: 0 1rem;
  padding: .5rem .5rem 1rem .5rem;
  background: none;
  overflow-Y: auto;
  border-radius: .5rem;
  /* border: 3px ridge darkgoldenrod; */
`;
const Gallery = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const MoreButton = styled(motion.button)`
  padding: .5rem;
  margin-top: .5rem;
  width: 40%;
  background: none;
  color: whitesmoke;
  font-family: 'Limelight', cursive;
  border-radius: .5rem;
  border: none;

  -webkit-box-shadow: 0px 3px 15px rgba(245,245,245,.5);
  -moz-box-shadow: 0px 3px 15px rgba(245,245,245,.5);
  box-shadow: inset 0px 3px 15px rgba(245,245,245,.5), 0px 3px 15px rgba(245,245,245,.5);
  @media (min-width: ${MEDIA_GATE.tablet}px){
    width: 60%;
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    margin: .5rem 10rem;
  };
`;