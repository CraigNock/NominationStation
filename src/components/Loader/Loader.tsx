import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {

};
const Loader : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      Loader
    </Wrapper>
  )
}

export default Loader;

const Wrapper = styled.div`

`;