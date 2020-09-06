import React from 'react'; 
import styled from 'styled-components'; 

import {GiFilmSpool} from 'react-icons/gi';
import {IoMdCloseCircle} from 'react-icons/io';


interface props {
  handleClose: () => void,
}

const Banner: React.FC<props> = ({handleClose}) => { 

  return (
    <StyledDiv> 
      <SubDiv>
        <GiFilmSpool style={{fontSize:'3rem', marginRight: '.5rem',}}/>
        <div>
          {/* <p>Well done!</p> */}
          <p>You've nominated 5/5 films!</p>
        </div>
        
        <CloseButton
          onClick={()=>handleClose()}
        >
          <IoMdCloseCircle/>
        </CloseButton>
      </SubDiv>
      
    </StyledDiv> 
  ) 
}; 


export default Banner;


const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #2b2d2f;
  border-radius: 1rem;
  /* border: 4px double darkgoldenrod; */
  box-shadow: 0px 0px 50px rgba(218,165,32,1), inset 0px 0px 5px rgba(218,165,32,.5);
  @media (min-width: ${`${MEDIA_GATE.tablet}px`}){
    
  };
  @media (min-width: ${`${MEDIA_GATE.desktop}px`}){
    
  };
`;
const SubDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  border: 4px double darkgoldenrod;
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
  color: gray;
  &:hover {
    cursor: pointer;
    opacity: .9;
  }
`;