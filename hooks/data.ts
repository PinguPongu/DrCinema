import { setMovies } from "@/src/redux/features/movies/movies-slice"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/src/redux/store";
import { apiGet } from "@/api/get"
import { useEffect } from "react";

export function useMovies() {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.authenticate.token);
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    if (!token) return;

    async function load() {
      const data = await apiGet('/movies', token);
      dispatch(setMovies(data));
    }

    load();
  }, [dispatch, token]);

  return movies;
}
