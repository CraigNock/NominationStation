import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';
import {singleFilm} from '../../types';

import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
// import {IoMdRemoveCircle} from 'react-icons/io';
import {IoMdRemoveCircleOutline} from 'react-icons/io';


interface props {
  nominations: singleFilm[],
  toggleNomination: (film: singleFilm) => void,
}

const NominationDisplay: React.FC<props> = ({nominations, toggleNomination}) => { 
//state to toggle full nomination list
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = ():void => {
    setShow(!show);
  }

  return (
    <StyledDiv> 
      <NominationBar> 
        <span>Your Nominations</span> 
        <span
          style={{color: (nominations.length === 5)? 'darkgoldenrod': 'inherit'}}
        >
          {`${nominations.length}/5`}
        </span> 
        <ToggleArrow
          onClick={()=>toggleShow()}
        >
          {show? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </ToggleArrow>
      </NominationBar>
      <Gallery
        style={{display: show? 'flex' : 'none'}}
      >
        {(nominations.length)? nominations.map((nom: singleFilm, id: number) => {
        return (
          <FilmCard
          key={nom.imdbID}
          title={nom.Title}
          year={nom.Year}
          poster={nom.Poster}
          >
            <NominateButtonWrap color={'rgb(100,0,0)'}>
              <button onClick={()=>toggleNomination(nom)}>
                <IoMdRemoveCircleOutline/>
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


export default NominationDisplay;


const StyledDiv = styled.div`
  margin: 1rem;
  padding: .5rem;
  background: silver;
  color: darkslategray;
  border-radius: .5rem;
  border: 3px ridge darkgoldenrod;
  
`;
const NominationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: 'Limelight', cursive;
  }
`;
const ToggleArrow = styled.div`
  font-size: 1.5rem;
  &:hover{
    cursor: pointer;
  }
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
`;
