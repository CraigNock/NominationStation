import React from 'react';
import styled from 'styled-components';

import SearchBar from '../Searchbar';
import FilmsDisplay from '../FilmsDisplay';
import NominationsDisplay from '../NominationDisplay';

const Main = () => {
  return (
    <StyledDiv>
      Nomination Station
      <SearchBar/>
        <Content>
          <FilmsDisplay/>
          <NominationsDisplay/>
        </Content>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
`;

export default Main;
