import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../../Globalstyles';
import Main from '../Main';

const App = () => {

  return (
    <Wrapper data-css='app-div'>
      <GlobalStyles/>
      <Main/>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

export default App;
