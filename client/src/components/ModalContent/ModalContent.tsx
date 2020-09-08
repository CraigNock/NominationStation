import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Loader from '../Loader';

import {MEDIA_GATE} from '../../constants';
import {getSingleFilm} from '../../apiCalls';
import {basicAnyObject} from '../../types';
import posterIcon from '../../assets/addrk.png';

interface props {
  filmId: string
};
const ModalContent : React.FC<props> = ({filmId}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  const [filmData, setFilmData] = useState<basicAnyObject>({})

//Fetches the more detailed data of a film for display on modal
  const getTheFilm = async (): Promise<any> => {
    setLoading(true);
    let data: basicAnyObject = await getSingleFilm(filmId);
    if(typeof data === 'object'){
      setFilmData(data);
    };
    setLoading(false);
  };
//on mount, fetch the film
  useEffect(()=>{
    getTheFilm();
  },[])

  return (
    <Wrapper>
      {(loading)? <Loader/> : <>
        <PosterBox>
          <PosterImage src={(imgError || filmData.Poster === 'N/A')? posterIcon : filmData.Poster} 
          alt={`Movie poster for ${filmData.Title}`}
          onError={()=> setImgError(true)}
          />
        </PosterBox>
        <Title>
          {`${filmData.Title} (${filmData.Year})`}
        </Title>
        <Info>
          <p>
            <span>Rated:</span>{` ${filmData.Rated}`}
          </p>
          <p>
            <span>Runtime:</span>{` ${filmData.Runtime}`}
          </p>
          <p>
            <span>Genre:</span>{` ${filmData.Genre}`}
          </p>
          <p>
            <span>Director(s):</span>{` ${filmData.Director}`}
          </p>
          <p>
            <span>Actors:</span>{` ${filmData.Actors}`}
          </p>
          <p>
          <span>Synopsis:</span>{` ${filmData.Plot}`}
          </p>
        </Info>
      </>}
    </Wrapper>
  )
}

export default ModalContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  flex-wrap: flex;
  height: 80vh;
  /* width: 100%; */
  padding: 1rem 1.5rem;
  background: whitesmoke;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    'title title'
    'poster info'
  };
`;
const PosterBox = styled.div`
  grid-area: poster;
  width: 10rem;
  max-height: 40%;
  max-width: 50%;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    max-height: 100%;
    max-width: 100%;
    width: fit-content;
    margin: 0 auto;
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
`;
const PosterImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  margin: 0 auto;
`;
const Info = styled.div`
  grid-area: info;
  width: 100%;
  margin: 0;
  p{
    margin: .5rem 0;
    span{
      font-weight: bold;
    }
  }
`;
const Title = styled.p`
  grid-area: title;
  margin: 1rem auto;
  font-family: 'Limelight', cursive;
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    font-size: 2rem;
    margin: 2rem auto;
    text-decoration: underline;
  };
`;