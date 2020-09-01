import React, {useState} from 'react';
import styled from 'styled-components';

import SearchBar from '../Searchbar';
import FilmsDisplay from '../FilmsDisplay';
import NominationsDisplay from '../NominationDisplay';

interface nomination {
  [key: string]: string
}


const Main = () => {
  const [nominations, setNominations] = useState<nomination[] | null>(null);

  return (
    <StyledDiv>
      <Title>
        Nomination Station
      </Title>
      <NominationsDisplay
        nominations={nominations}
      />
      <SearchBar/>
      <FilmsDisplay/>
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
