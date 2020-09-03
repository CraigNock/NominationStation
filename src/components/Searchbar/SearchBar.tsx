import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {getFilms} from '../../apiCalls';

import {singleFilm} from '../../types';
import {getFilmsResults} from '../../types';

interface props {
  setSearchResults: React.Dispatch<React.SetStateAction<singleFilm[]>>,
}

// interface getFilmsResults{
//   films: string[],
//   count: string,
// }

const SearchBar: React.FC<props> = ({setSearchResults}) => { 

  const [inputValue, setInputValue] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(false);
  const [resultCount, setResultCount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const submitHandle = async (input: string | null) : Promise<any> => {
    if(!input) return;
  //disables search button until results fetched
    setDisable(true);
    let results: getFilmsResults | string = await getFilms(input);
    console.log('submitSearch results', typeof results);
    if(typeof results === 'object'){
      setError('');
      setResultCount(results.count);
      setSearchResults(results.films);
    } else {
      setResultCount('')
      setError(results);
    };
    setDisable(false);
  };

  return (
    <>
    <StyledForm> 
      <SearchBox>
        <StyledInput 
          type="text"
          onChange={(e)=>setInputValue(e.target.value)}
          value={inputValue}
          placeholder={'Enter Film Title'}
        />
        <ClearButton
          onClick={()=>setInputValue('')}
        >
          X
        </ClearButton>
      </SearchBox>
      <SearchButton
        type='submit'
        onClick={(e)=>{
          e.preventDefault();
          if(inputValue === '') return;
          submitHandle(inputValue);
        }}
        disabled={disable}
      >
        Search!
      </SearchButton>
    </StyledForm> 
    <Message>
      <span>
        {(resultCount !== '')? `${resultCount} results:` : ''}
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
const ClearButton = styled.div`
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
const SearchButton = styled.button`
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
  margin-bottom: .5rem;
  text-align: center;
  font-size: .75rem;
  color: goldenrod;
  font-family: 'Limelight', cursive;
  span{
    color: whitesmoke;
    font-family: 'Limelight', cursive;
  }
`;


export default SearchBar;
