export interface singleFilm {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export interface getFilmsResults{
  films: singleFilm[],
  count: string,
}


export interface basicStringObject {
  [key: string]: string,
}

export interface basicAnyObject {
  [key: string]: any,
}