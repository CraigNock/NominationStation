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
  const [nominations, setNominations] = useState<string[]>([]);

  //Function to toggle whether film is nominated by user
  const toggleNomination = (film : string | null): void => {
    if(!film || nominations.length > 4) return;
    console.log('film', film);
    let newNoms: string[] = [...nominations];
    if(film && nominations.includes(film)){
      console.log('add film');
      setNominations([...nominations, film])
    } else {
      console.log('remove film');
      newNoms.splice(newNoms.indexOf(film), 1, film);
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
      <SearchBar/>
      <FilmsDisplay
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
