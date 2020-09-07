import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion';

import {getFilms} from '../../apiCalls';

import {getFilmsResults} from '../../types';
import {searchResults} from '../../types';
import {MEDIA_GATE} from '../../constants';


interface props {
  searchResults: searchResults,
  setSearchResults: React.Dispatch<React.SetStateAction<searchResults>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

//// Search form to retrieve film list for display/selection ////
const SearchBar: React.FC<props> = ({searchResults, setSearchResults, setLoading}) => { 
//updates shown value in form
  const [inputValue, setInputValue] = useState<string>('');
//disables submit button while searching
  const [disable, setDisable] = useState<boolean>(false);
//used to display total results found (but not shown)
  const [resultCount, setResultCount] = useState<string>('');
//used to display errors returned from fetch
  const [error, setError] = useState<string>('');

////Function to fetch intial results of search////
  const submitHandle = async (search:string, page: number) : Promise<any> => {
    if(!search || search.length < 2) return;
//disables search button until results fetched
    setDisable(true);
    setLoading(true);
    let results: getFilmsResults | string = await getFilms(search, page);
//if there is an error; typeof results will be 'string'
    if(typeof results === 'object'){
      setError('');
      setResultCount(results.count);
      setSearchResults({
        films: results.films,
        searchTerm: search,
        count: results.count,
      })
    } else {
      setResultCount('')
      setError(results);
    };
    setDisable(false);
    setLoading(false);
  };

  return (
    <>
    <StyledForm> 
      <SearchBox>
        <StyledInput 
          type="text"
          onChange={(e)=>{
            setInputValue(e.target.value);
            if(e.target.value === '') return;
            submitHandle(e.target.value, 1);
          }}
          value={inputValue}
          placeholder={'Enter Film Title'}
        />
        <ClearButton
          onClick={()=>setInputValue('')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          X
        </ClearButton>
      </SearchBox>
      <SearchButton
        type='submit'
        onClick={(e)=>{
          e.preventDefault();
          if(inputValue === '') return;
          submitHandle(inputValue, 1);
        }}
        disabled={disable}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Search!
      </SearchButton>
    </StyledForm> 
    <Message>
      <span>
        {(resultCount !== '')? 
        `Showing ${searchResults.films?.length} / ${resultCount} results:` : ''}
      </span>
      {error}
    </Message>
    </>
  ) 
}; 


const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 1rem .5rem;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    max-width: 50vw;
    margin: 1rem auto;
  };
`;
const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 1.5rem;
  width: 100%;
`;
const StyledInput = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0 2rem 0 .5rem;
  font-family: 'Raleway', sans-serif;
  border-radius: .5rem 0 0 .5rem;
  border: none;
  -webkit-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  -moz-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  box-shadow: 0px 3px 15px rgba(218,165,32,.5);
`;
const ClearButton = styled(motion.div)`
  display: inline-block;
  position: absolute;
  height: 1rem;
  width: 1rem;
  top: .25rem;
  right: .5rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  background: lightgray;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
  }
`;
const SearchButton = styled(motion.button)`
  height: 2rem;
  margin-left: .15rem;
  font-family: 'Limelight', cursive;
  color: #2b2d2f;
  background: whitesmoke;
  border-radius: 0 .5rem .5rem 0;
  border: none;
  -webkit-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  -moz-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  box-shadow: 0px 3px 15px rgba(218,165,32,.5);
`;
const Message = styled.p`
  /* margin-bottom: .5rem; */
  margin: 1rem 0 .5rem 2rem;
  /* text-align: center; */
  font-size: .8rem;
  color: goldenrod;
  font-family: 'Limelight', cursive;
  span{
    color: whitesmoke;
    font-family: 'Limelight', cursive;
  }
`;


export default SearchBar;
