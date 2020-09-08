import React, {useState, PropsWithChildren } from 'react'; 
import styled from 'styled-components'; 
import { motion, AnimatePresence } from 'framer-motion';

import {MEDIA_GATE} from '../../constants';
import posterIcon from '../../assets/addrk.png';

interface props {
  index: number,
  id: string,
  title: string,
  year: string,
  poster: string,
  setModal: React.Dispatch<React.SetStateAction<string>>,
};

//// Card for display/selection of individual film data ////
const FilmCard: React.FC<PropsWithChildren<props>> = ({index, id, title, year, poster, children, setModal}) => { 
  const [imgError, setImgError] = useState<boolean>(false);
  return (
    <AnimatePresence >
    <StyledDiv
      layout 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '7rem' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5}}
      onClick={()=>setModal(id)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    > 
      <PosterBox>
        <PosterImage src={(imgError || poster === undefined)? posterIcon : poster} 
        alt={`Movie poster for ${title}`}
        onError={()=> setImgError(true)}
        />
      </PosterBox>
      <Name>
        <p>
          {title}
        </p>
        <p>
          <span>{year}</span>
        </p>
      </Name>
      {children}
    </StyledDiv> 
    </AnimatePresence>
  ) 
}; 


export default FilmCard;


const StyledDiv = styled(motion.div)`
  display: flex;
  flex: 1;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 90%;
  min-width: 16rem;
  height: 7rem;
  padding: 0 .75rem;
  margin: .5rem;
  background: whitesmoke;
  border-radius: .5rem;
  color: darkslategray;
  overflow:hidden;
  p {
    span{
      font-style: italic;
      font-size: .8rem;
    };
  };
  &:hover{
    cursor: pointer;
  }
  @media (min-width: ${MEDIA_GATE.tablet}px){
    width: 40%;
    max-width: 40%;
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    width: 30%;
    max-width: 30%;
  };
  @media (min-width: ${MEDIA_GATE.widescreen}px){
    width: 20%;
    max-width: 20%;
  };
`;
const PosterBox = styled.div`
  height: 6rem;
  width: 5rem;
  max-height: 6rem;
  max-width: 5rem;
`;
const PosterImage = styled.img`
  max-height: 6rem;
  max-width: 5rem;
  object-fit: contain;
`;
const Name = styled.div`
  width: 100%;
  margin: 0 2rem;
`;