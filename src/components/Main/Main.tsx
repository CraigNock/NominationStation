import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


import SearchBar from '../Searchbar';
import FilmsDisplay from '../FilmsDisplay';
import NominationsDisplay from '../NominationDisplay';

import {singleFilm} from '../../types';
import {searchResults} from '../../types';

import {usePersistedState} from '../../utils';
import {placeholderResults} from '../../utils';

import Snackbar from '@material-ui/core/Snackbar';
import {IoMdCloseCircle} from 'react-icons/io';
import {GiFilmSpool} from 'react-icons/gi';



const Main = () => {
//Storage of user nominations(max 5) (persisted in localStorage)
//*felt that using a context provider would be overengineering.
  const [nominations, setNominations] = usePersistedState([], 'nominations');
//storage of search results
  const [searchResults, setSearchResults] = useState<searchResults>(placeholderResults);
//toggle banner open
  const[bannerOpen, setBannerOpen] = useState<boolean>(false);


//Function to toggle whether film is nominated by user
  const toggleNomination = (film : singleFilm): void => {
    if(!film) return;
    let newNoms: singleFilm[] = [...nominations];
    if((nominations.findIndex((entry:singleFilm)=> entry.imdbID === film.imdbID)) === -1){
      setNominations([...nominations, film])
    } else {
      newNoms.splice(newNoms.indexOf(film), 1);
      setNominations(newNoms);
    };
  };
//shows alert when nomination slots full
  useEffect(()=>{
    if(nominations.length < 5)return;
    setBannerOpen(true);
  }, [nominations]);
//closes banner
  const handleClose = () => {
    setBannerOpen(false);
  };


  return (
    <StyledDiv>
      <AnimateSharedLayout>
        <NavBar>
          <Title>
            Nomination Station
          </Title>
          <NominationsDisplay
            nominations={nominations}
            toggleNomination={toggleNomination}
          />
          <SearchBar
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </NavBar>
        <FilmsDisplay
          nominations={nominations}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          toggleNomination={toggleNomination}
        />
        <Snackbar
          open={bannerOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical:'bottom', horizontal: 'center' }}
        >
          <SnackDiv>
            <GiFilmSpool style={{fontSize:'2rem', marginRight: '.5rem',}}/>
            <div>
              <p>Well done!</p>
              <p>You've nominated 5/5 films!</p>
            </div>
            
            <CloseButton
              onClick={()=>handleClose()}
            >
              <IoMdCloseCircle/>
            </CloseButton>
          </SnackDiv>
        </Snackbar>
      </AnimateSharedLayout>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: column; */

  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    'navbar'
    'results';

  background: rgb(43,45,47);
  background: linear-gradient(180deg, 
    rgba(43,45,47,1) 60%, rgba(255,219,126,.1) 100%);

`;
const NavBar = styled.div`
  grid-area: navbar;
`;
const Title = styled.h1`
  margin: .5rem;
  font-family: 'Limelight', cursive;
  text-align: center;
  font-size: 2rem;
  text-decoration: underline;
`;
const SnackDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  background: green;
  border-radius: 1rem;
  p{
    font-family: 'Limelight', cursive;
    text-align: center;
    /* display: inline-block; //on media^ */
  }
`;
const CloseButton = styled.div`
  display: inline-block;
  padding: .25rem;
  margin: -3rem -1.25rem 0 .5rem;
  height: 1.25rem;
  width: 1.25rem;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    opacity: .9;
  }
`;

export default Main;
