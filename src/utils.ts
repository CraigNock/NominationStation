import React, {useState, useEffect} from 'react';

import {singleFilm} from './types';


//function to store/retrieve nomination state as a string in local storage 
export const usePersistedState: Function = (defaultValue: singleFilm[], key: string): any => {
  //retrieves from storage if available
    const [stored, setStored] = useState<singleFilm[]>(
      () => {
        return (typeof key === 'string')?
        JSON.parse(localStorage.getItem(key) || '[]') 
        : defaultValue
      }
    );
  //updates storage on changes
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(stored));
    }, [key, stored]);
  
    return [stored, setStored] as const;
  };