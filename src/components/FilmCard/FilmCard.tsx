import React, { PropsWithChildren } from 'react'; 
import styled from 'styled-components'; 


interface props {
  title: string,
  year: string,
  poster: string,
};

const FilmCard: React.FC<PropsWithChildren<props>> = ({title, year, poster, children}) => { 

  return (
    <StyledDiv> 
      <PosterImage src={poster} alt={`Movie poster for ${title}`}/>
      <div>
        <p>
          {title}
        </p>
        <p>
          <span>{year}</span>
        </p>
      </div>
      {children}
    </StyledDiv> 
  ) 
}; 


export default FilmCard;


const StyledDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: .5rem .75rem;
  margin: .5rem;
  background: whitesmoke;
  border-radius: .5rem;
  color: darkslategray;
  p {

    span{
      font-style: italic;
      font-size: .8rem;
    }
  }
`;
const PosterImage = styled.img`
  height: 6rem;
`;