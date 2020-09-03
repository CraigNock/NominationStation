import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';


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
          style={{color: (nominations.length === 5)? 'green': 'black'}}
        >
          {`${nominations.length}/5`}
        </span> 
        <ToggleArrow
          onClick={()=>toggleShow()}
        >
          {show? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </ToggleArrow>
      </NominationBar>
      <Gallery>
        {(nominations.length)? nominations.map((nom: string, id: number) => {
        return (
          <FilmCard
            key={id}
          >
            <p>
              {nom}
            </p>
            <button
              onClick={()=>toggleNomination(nom)}
            >
              Un-Nominate
            </button>
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
`;
const NominationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: bold;
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
const FilmCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: .5rem;
  margin: .5rem;
  background: whitesmoke;
  border-radius: .5rem;
`;