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
    let results: string[] = await getFilms(input);
    console.log('submitSearch results', results);
    setSearchResults(results);
  };

  return (
    <StyledForm> 
      <div> SearchBar </div>
      <button
          type='submit'
          onClick={(e)=>{
            e.preventDefault();
            if(inputValue === '') return;
            // setDisable(true);
            submitHandle(inputValue);
          }}
          disabled={disable}
        >
          Search!
        </button>
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
    </StyledForm> 
  ) 
}; 


const StyledForm = styled.form`
  margin: 1rem;
`;

const SearchBox = styled.div`
  
`;
const StyledInput = styled.input`
  
`;
const ClearButton = styled.div`
  display: inline-block;
  background: gray;
  &:hover {
    cursor: pointer;
  }
`;


export default SearchBar;
