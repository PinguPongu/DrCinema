export interface Movie {
  _id: string;
  id: number;

  title: string;
  alternativeTitles?: string;

  actors_abridged: { name: string }[];
  directors_abridged: { name: string }[];

  certificate?: {
    is: string;
    color: string;
    number: string;
  };
  certificateIS?: string;
  certificateImg?: string;

  durationMinutes: number;

  genres: {
    ID: number;
    Name: string;
    NameEN: string;
  }[];

  ids: {
    imdb: string;
    rotten: string;
    tmdb: string;
  };

  omdb: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    tomatoMeter: string;
    tomatoImage: string;
    tomatoRating: string;
    tomatoReviews: string;
    tomatoFresh: string;
    tomatoRotten: string;
    tomatoConsensus: string;
    tomatoUserMeter: string;
    tomatoUserRating: string;
    tomatoUserReviews: string;
    tomatoURL: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }[];

  plot: string;
  poster: string;

  ratings: {
    imdb: string;
    rotten_audience: string;
    rotten_critics: string;
  };

  showtimes?: {
    cinema: {
      id: number;
      name: string;
    };
    cinema_name: string;
    schedule: {
      time: string;
      purchase_url: string;
      info: string;
    }[];
  }[];

   trailers: {
    id: number;
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;        
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
      url: string;       
    }[];
  }[];

  year: string;
}

export interface Cinema {
  id: number,
  name: string,
  address: string,
  city: string,
  phone: string,
  website: string,
  description: string,
  google_map: string
}
