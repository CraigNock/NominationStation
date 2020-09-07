

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


export const getSingleFilm = (idNum: number | null) => {
  if (!idNum) return;
  
  fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${idNum}&type=movie&plot=full`)
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
