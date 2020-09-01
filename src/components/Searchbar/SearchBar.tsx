import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {getFilms} from '../../apiCalls';

interface props {
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>,
}

const SearchBar: React.FC<props> = ({setSearchResults}) => { 

  const [inputValue, setInputValue] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const submitHandle = async (input: string | null) : Promise<any> => {
    if(!input) return;
  //disables search button until results fetched
    setDisable(true);
    let results: string[] = await getFilms(input);
    console.log('submitSearch results', results);
    setSearchResults(results);
    setDisable(false);
  };

  return (
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
  ) 
}; 


const StyledForm = styled.form`
  display: flex;
  margin: 1rem;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 1.5rem;
  width: fit-content;
  /* border: 1px solid red; */
`;
const StyledInput = styled.input`
  height: 1.1rem;
`;
const ClearButton = styled.div`
  display: inline-block;
  position: absolute;
  height: 1rem;
  width: 1rem;
  top: .25rem;
  right: .25rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  background: lightgray;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
  }
`;
const SearchButton = styled.button`

`;


export default SearchBar;
