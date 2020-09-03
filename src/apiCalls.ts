

export const getFilms = async (searchTerm: string | null): Promise<any> => {
  if (!searchTerm) return;

  return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}&type=movie`)
    .then(data => data.json())
    .then(data => {
      if(data.Response !== 'False'){
        console.log('getFilms data', data);
      //just extracting and returning name and year in a string for now
        let films = data.Search.map((entry: {[key: string]: string})=>{
          return `${entry.Title} ${entry.Year}`
        })
        return films;
      } else {
        console.log('data.Error', data.Error);
      //API returns error messages, can be used to inform user
        return (data.Error? data.Error : 'An error has occured'); 
      }
    })
    .catch(err=>{
      console.log('getFilmsFetchERR', err);
      return 'An error has occured';
    })
  
}

//// response ////
  //{
  // "Search": [
  //   {
  //     "Title": "The Matrix",
  //     "Year": "1999",
  //     "imdbID": "tt0133093",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  //   },
  //   {
  //     "Title": "The Matrix Reloaded",
  //     "Year": "2003",
  //     "imdbID": "tt0234215",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  //   },
  // ]
  //}

export const getSingleFilm = (idNum: number | null) => {
  if (!idNum) return;
  
  fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${idNum}&type=movie&plot=full`)
  .then(data => data.json())
  .then(data => {
    if(data.status === 200){
      console.log('getSingleFilm data', data);
      return data;
    } else {
      return null; //or status: use for error message on page
    }
  })
  .catch(err=>{
    console.log('getFilmsFetchERR', err);
  })
}

//// response ////
// {
//   "Title": "Dragonball Evolution",
//   "Year": "2009",
//   "Rated": "PG",
//   "Released": "10 Apr 2009",
//   "Runtime": "85 min",
//   "Genre": "Action, Adventure, Family, Fantasy, Sci-Fi, Thriller",
//   "Director": "James Wong",
//   "Writer": "Ben Ramsey (screenplay), Akira Toriyama (novel)",
//   "Actors": "Justin Chatwin, Yun-Fat Chow, Emmy Rossum, Jamie Chung",
//   "Plot": "The story begins with Goku, who seeks out upon his adoptive grandfather Grandpa Gohan's dying request to find the great Master Roshi and gather all seven Dragon Balls. Of which he has one, in order to prevent the evil Lord Piccolo from succeeding in his desire to use the Dragon Balls to take over the world. And Goku's quest is to obtain the mystical Dragonballs before Piccolo does.",
//   "Language": "English, Japanese, Hindi",
//   "Country": "USA, Mexico, Japan, Hong Kong, UK",
//   "Awards": "1 nomination.",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDM0ODQxMF5BMl5BanBnXkFtZTcwOTMyMzMzMg@@._V1_SX300.jpg",
//   "Ratings": [
//     {
//       "Source": "Internet Movie Database",
//       "Value": "2.5/10"
//     },
//     {
//       "Source": "Rotten Tomatoes",
//       "Value": "15%"
//     },
//     {
//       "Source": "Metacritic",
//       "Value": "45/100"
//     }
//   ],
//   "Metascore": "45",
//   "imdbRating": "2.5",
//   "imdbVotes": "69,142",
//   "imdbID": "tt1098327",
//   "Type": "movie",
//   "DVD": "28 Jul 2009",
//   "BoxOffice": "$9,353,573",
//   "Production": "20th Century Fox",
//   "Website": "N/A",
//   "Response": "True"
// }