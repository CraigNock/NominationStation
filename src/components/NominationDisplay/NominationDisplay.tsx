import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import FilmCard from '../FilmCard';
import NominateButtonWrap from '../NominateButtonWrap';

import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
// import {IoMdRemoveCircle} from 'react-icons/io';
import {IoMdRemoveCircleOutline} from 'react-icons/io';


// interface nomination {
//   [key: string]: string
// };
interface props {
  nominations: string[],
  toggleNomination: (film: string | null) => void,
}

const NominationDisplay: React.FC<props> = ({nominations, toggleNomination}) => { 
//state to toggle full nomination list
  const [show, setShow] = useState<boolean>(true);

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
        {(nominations.length)? nominations.map((nom: string, id: number) => {
        return (
          <FilmCard
            key={id}
          >
            <p>
              {nom}
            </p>
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
