import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';
import {singleFilm} from '../../types';
import {MEDIA_GATE} from '../../constants';


import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
import {IoMdRemoveCircleOutline} from 'react-icons/io';


interface props {
  nominations: singleFilm[],
  toggleNomination: (film: singleFilm) => void,
  setModal: React.Dispatch<React.SetStateAction<string>>,
}

//Styling object to be conditionally applied to nomination count
const fives = {
  color: 'darkgoldenrod',
  fontSize: '1.5rem',
  borderRadius: '50%',
  webkitBoxShadow: '0px 3px 15px rgba(218,165,32,.5)',
  mozBoxShadow: '0px 3px 15px rgba(218,165,32,.5)',
  boxShadow: '0px 3px 15px rgba(218,165,32,.5)',
  };

//// Displays films that user has nominated ////
const NominationDisplay: React.FC<props> = ({nominations, toggleNomination, setModal}) => { 
//state to toggle full nomination list
  const [show, setShow] = useState<boolean>(false);
  const toggleShow = ():void => {
    setShow(!show);
  };

  return (
    <StyledDiv > 
      <NominationBar
        onClick={()=>toggleShow()}
      > 
        <span>Your Nominations</span> 
        <span
          style={(nominations.length === 5)? fives: {}}
        >
          {`${nominations.length}/5`}
        </span> 
        <ToggleArrow>
          {show? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </ToggleArrow>
      </NominationBar>
      <AnimateSharedLayout>
      <AnimatePresence >
        <Gallery
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: show? 'fit-content': 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 1.1}}
        >
          {(nominations.length)? nominations.map((nom: singleFilm, id: number) => {
            return (
              <FilmCard
                key={nom.imdbID}
                index={id}
                id={nom.imdbID}
                title={nom.Title}
                year={nom.Year}
                poster={nom.Poster}
                setModal={setModal}
              >
                <NominateButtonWrap color={'rgb(100,0,0)'}>
                  <button
                    onClick={(ev)=>{
                      ev.stopPropagation();
                      toggleNomination(nom);
                    }}
                  >
                    <IoMdRemoveCircleOutline/>
                  </button>
                </NominateButtonWrap>
              </FilmCard>
            )
          })
          : ''}
        </Gallery>
      </AnimatePresence>
      </AnimateSharedLayout>
    </StyledDiv> 
  ) 
}; 


export default NominationDisplay;


const StyledDiv = styled(motion.div)`
  margin: 1rem;
  padding: .5rem;
  background: silver;
  color: darkslategray;
  border-radius: .5rem;
  border: 3px double darkgoldenrod;
  background: linear-gradient(90deg, 
    rgba(220,220,220,1) 0%, 
    rgba(192,192,192,1) 50%, 
    rgba(220,220,220,1) 100%);
  
`;
const NominationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: 'Limelight', cursive;
    font-size: 1.25rem;
  }
  &:hover{
    cursor: pointer;
  }
`;
const ToggleArrow = styled.div`
  font-size: 1.5rem;
`;
const Gallery = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
`;
