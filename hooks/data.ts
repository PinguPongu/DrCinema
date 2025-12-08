import { apiGet } from "@/api/get";
import { getCinemas } from "@/src/redux/features/cinema/cinema-slice";
import { getMovies } from "@/src/redux/features/movies/movies-slice";
import { RootState } from "@/src/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useMovies() {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.token.token);
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    if (!token) return;

    async function load() {
      const data = await apiGet('/movies', token);
      dispatch(getMovies(data));
    }

    load();
  }, [dispatch, token]);

  return movies;
}


export function useCinmeas() {
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