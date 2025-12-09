import { apiGet } from "@/api/get";
import { getCinemas } from "@/src/redux/features/cinema/cinema-slice";
import { getMovies } from "@/src/redux/features/movies/movies-slice";
import { RootState } from "@/src/redux/store";
import { Movie as MovieType } from "@/src/types/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useMovies() {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.token.token);
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    if (!token) return;

    async function load() {
      const data: MovieType[] = await apiGet('/movies', token);
      // Guðni skrifaði þetta til þess að taka burtu dupes
      const uniqueMovies = [
        ...new Map(data.map(movie => [movie.id, movie])).values()
      ];
      dispatch(getMovies(uniqueMovies));
    }

    load();
  }, [dispatch, token]);

  return movies;
}


export function useCinemas() {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.token.token);
  const cinemas = useSelector((state: RootState) => state.cinemas.cinemas);

  useEffect(() => {
    if (!token) return;

    async function load() {
      const data = await apiGet('/theaters', token);
      dispatch(getCinemas(data));
    }

    load();
  }, [dispatch, token]);  

  return cinemas;
}
