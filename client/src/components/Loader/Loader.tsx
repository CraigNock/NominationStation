import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import reel from '../../assets/reel.png';

interface props {
};
const Loader : React.FC<props> = () => {

  return (
    <AnimatePresence >
      <Wrapper>
        <Bar/>
        <Reel 
          src={reel} 
          alt='Spinning film reel'
          animate={{ rotate: [360, 0] }}
          transition={{
          duration: 2.5,
          repeat: Infinity,
          // repeatType: 'reverse',
          ease: 'linear',
          }}
        />
        <Reel2 
          src={reel} 
          alt='Spinning film reel'
          animate={{ rotate: [360, 0] }}
          transition={{
          duration: 2,
          repeat: Infinity,
          // repeatType: 'reverse',
          ease: 'linear',
          }}
        />
      </Wrapper>
    </AnimatePresence>
    
  )
}

export default Loader;

const Wrapper = styled(motion.div)`
  width: 100%;
  margin: 4rem auto;
  text-align: center;
`;
const Reel = styled(motion.img)`
  width: 4rem;
  height: 4rem;
  margin: 0 .15rem;
  padding: 0 0 .1rem 0;
  filter: grayscale(50%);
`;
const Reel2 = styled(Reel)`
  padding: .1rem 0 0 0;
`;
const Bar = styled.div`
  height: .25rem;
  width: 5rem;
  background: rgba(0,0,0,.4) ;
  margin: -1rem auto;
  z-index: -1;
`;
