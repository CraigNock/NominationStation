import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from "framer-motion";

import SearchBar from '../Searchbar';
import FilmsDisplay from '../FilmsDisplay';
import NominationsDisplay from '../NominationDisplay';
import Banner from '../Banner';
import ModalContent from '../ModalContent';

import {singleFilm} from '../../types';
import {searchResults} from '../../types';

import {usePersistedState} from '../../utils';
// import {placeholderResults} from '../../utils';
import {MEDIA_GATE} from '../../constants';

import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';


const Main = () => {
//Storage of user nominations(max 5) (persisted in localStorage)
//*felt that using a context provider would be overengineering.
  const [nominations, setNominations] = usePersistedState([], 'nominations');
//storage of search results
  const [searchResults, setSearchResults] = useState<searchResults>({
    films: [],
    searchTerm: '',
    count: '',
  });
//toggle banner open
  const[bannerOpen, setBannerOpen] = useState<boolean>(false);
//display Loader when loading
  const [loading, setLoading] = useState<boolean>(false);

  const [modal, setModal] = useState<string>('');

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
//shows banner when nomination slots full
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
            setModal={setModal}
          />
          <SearchBar
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setLoading={setLoading}
          />
        </NavBar>
      </AnimateSharedLayout>
      <FilmsDisplay
        nominations={nominations}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        toggleNomination={toggleNomination}
        loading={loading}
        setModal={setModal}
      />
      <Snackbar
        open={bannerOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical:'bottom', horizontal: 'center' }}
      >
        <Banner
          handleClose={handleClose}
        />
      </Snackbar>
      <Dialog
        open={(modal !== '')}
        onClose={()=>setModal('')}
        maxWidth={'lg'}
        fullWidth={false}
      >
        {(modal !== '') && <ModalContent filmId={modal} />}
      </Dialog>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    'navbar'
    'results';
  background: rgb(43,45,47);
  background: linear-gradient(180deg, 
    rgba(43,45,47,.95) 60%, rgba(255,219,126,.3) 100%);
  @media (min-width: ${MEDIA_GATE.desktop}px){
    grid-template-columns: 1fr 8fr 1fr ;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    'empty navbar space'
    'results results results'
  } 
`;
const Title = styled.h1`
  margin: .5rem;
  font-family: 'Limelight', cursive;
  text-align: center;
  font-size: 2rem;
  text-decoration: underline;
`;
const NavBar = styled.div`
  grid-area: navbar;
`;




export default Main;
