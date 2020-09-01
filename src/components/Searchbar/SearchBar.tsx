import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const SearchBar = () => { 
  const [inputValue, setInputValue] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(false);

  const submitHandle = (input: string | null) : void => {
    console.log('inputValue', inputValue);
    console.log('input', input);
  };

  return (
    <StyledForm> 
      <div> SearchBar </div>
      <button
          type='submit'
          onClick={(e)=>{
            e.preventDefault();
            submitHandle(null);
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
