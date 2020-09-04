import React, {useState, useEffect} from 'react';

import {singleFilm} from './types';
import {searchResults} from './types';

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


// dummy data for styling
export const placeholderResults: searchResults = {
  films: [
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix Reloaded",
      "Year": "2003",
      "imdbID": "tt0234215",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix Revolutions",
      "Year": "2003",
      "imdbID": "tt0242653",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix Revisited",
      "Year": "2001",
      "imdbID": "tt0295432",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg"
    },
    {
      "Title": "Armitage III: Dual Matrix",
      "Year": "2002",
      "imdbID": "tt0303678",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Sex and the Matrix",
      "Year": "2000",
      "imdbID": "tt0274085",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "Buhera mátrix",
      "Year": "2007",
      "imdbID": "tt0970173",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGZiNzdmYWUtZTY0ZS00ZGU4LWE1NDgtNTNkZWM3MzQ0NDY4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjIzMDAwOTc@._V1_SX300.jpg"
    },
    {
      "Title": "Return to Source: Philosophy & The Matrix",
      "Year": "2004",
      "imdbID": "tt0439783",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODJjOTEyYTAtMGYwMC00ZDc5LTg5ZGItMGJmNzM4MjUzM2Q5XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix Recalibrated",
      "Year": "2004",
      "imdbID": "tt0410519",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODE1NWM0NmYtMmM1Ny00OTg3LWE3YWUtOTJhMzVkNWEzOGI0XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "Making 'The Matrix'",
      "Year": "1999",
      "imdbID": "tt0365467",
      "Type": "movie",
      "Poster": "N/A"
    }
  ],
  searchTerm: 'matrix',
  count: '95',
}