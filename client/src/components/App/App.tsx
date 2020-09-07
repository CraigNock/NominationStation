import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../../Globalstyles';
import Main from '../Main';
import {MEDIA_GATE} from '../../constants';


import train from '../../assets/trainlight.png';

const App = () => {

  return (
    <Wrapper data-css='app-div'>
      <GlobalStyles/>
      <Main/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color:black;
  background-image: url(${train});
  background-repeat: no-repeat;
  background-position: right;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
`;

export default App;
