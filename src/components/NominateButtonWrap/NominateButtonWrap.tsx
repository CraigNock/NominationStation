import React, { PropsWithChildren } from 'react'; 
import styled from 'styled-components'; 

interface props {
  color: string,
};

const NominateButtonWrap: React.FC<PropsWithChildren<props>> = ({color, children}) => { 

  return (
    <StyledWrap style={{color: color, borderColor: color}}> 
      {children}
    </StyledWrap> 
  ) 
}; 


export default NominateButtonWrap;


const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    color: inherit;
    background: none;
    border: none;
    margin: 0 0 0 .25rem;
    padding: .25rem;
    height: 2.5rem;
    font-size: 2rem;
    border-radius: 50%;

    /* border: 1px solid whitesmoke; */
    /* border-color: inherit; */

    -webkit-box-shadow: 0px 3px 15px rgba(0,0,0,.4);
    -moz-box-shadow: 0px 3px 15px rgba(0,0,0,.4);
    box-shadow: 0px 3px 15px rgba(0,0,0,.4);

    &:disabled {
      color: gray;
    }
  }
`;