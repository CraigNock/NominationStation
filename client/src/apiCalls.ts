

export const getFilms = async (searchTerm: string | null, page: number): Promise<any> => {
  if (!searchTerm) return;

  return fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}&type=movie&page=${page}`)
    .then(data => data.json())
    .then(data => {
      if(data.Response !== 'False'){
        return {
          films: data.Search,
          count: data.totalResults,
        };
      } else {
      //API returns error messages, pass back to inform user
        return (data.Error? data.Error : 'An error has occured'); 
      }
    })
    .catch(err=>{
      console.log('getFilmsFetchERR', err);
      return 'An error has occured';
    })
  
};


export const getSingleFilm = async (filmId: string): Promise<any> => {
  if (!filmId) return;
  
  return fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${filmId}&type=movie`)
  .then(data => data.json())
  .then(data => {
    if(data.Response !== 'False'){
      return data;
    } else {
      return (data.Error? data.Error : 'An error has occured');
    }
  })
  .catch(err=>{
    console.log('getFilmsFetchERR', err);
    return 'An error has occured';
  })
}
