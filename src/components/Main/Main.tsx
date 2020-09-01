import React, {useState} from 'react';
import styled from 'styled-components';

import SearchBar from '../Searchbar';
import FilmsDisplay from '../FilmsDisplay';
import NominationsDisplay from '../NominationDisplay';



// interface nomination {
//   [key: string]: string
// }


const Main = () => {
//Storage of user nominations(max 5)
  //*felt that using a context provider would be overengineering.
  const [nominations, setNominations] = useState<string[]>([]);
//storage of search results
  const [searchResults, setSearchResults] = useState<string[]>([]);

//Function to toggle whether film is nominated by user
  const toggleNomination = (film : string | null): void => {
    if(!film || nominations.length > 4) return;
    let newNoms: string[] = [...nominations];
    if(film && !nominations.includes(film)){
      setNominations([...nominations, film])
    } else {
      newNoms.splice(newNoms.indexOf(film), 1);
      setNominations(newNoms);
    };
  };

  return (
    <StyledDiv>
      <Title>
        Nomination Station
      </Title>
      <NominationsDisplay
        nominations={nominations}
        toggleNomination={toggleNomination}
      />
      <SearchBar
        setSearchResults={setSearchResults}
      />
      <FilmsDisplay
        nominations={nominations}
        searchResults={searchResults}
        toggleNomination={toggleNomination}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

export default Main;
