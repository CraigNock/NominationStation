import React, { PropsWithChildren } from 'react'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion';


interface props {
  index: number,
  title: string,
  year: string,
  poster: string,
};

const FilmCard: React.FC<PropsWithChildren<props>> = ({index, title, year, poster, children}) => { 

  return (
    <StyledDiv
      layout 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '7rem' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: .5}}
    > 
      <PosterBox>
        <PosterImage src={poster} alt={`Movie poster for ${title}`}/>
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
  ) 
}; 


export default FilmCard;


const StyledDiv = styled(motion.div)`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
    }
  }
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