import * as Linking from "expo-linking";
import { Share, Button } from "react-native";

function createMovieLink(cinemaId: number | string, movieId: number | string){
    return Linking.createURL("/movie-details", {
        queryParams:{
            cinemaId: String(cinemaId),
            movieId: String(movieId)
        }
    })
}

export function ShareMovieButton({ cinemaId, movieId }: { cinemaId: number; movieId: number }) {

  const onShare = async () => {
    const url = createMovieLink(cinemaId, movieId);

    await Share.share({
      message: `Check out this movie: ${url}`,
    });
  };

    return (
        <Button title="Share movie" onPress={onShare}/>
    );
}

function createFavoritesLink(movieId: string[]){
    return Linking.createURL("/favorites", {
        queryParams:{
            movieId: JSON.stringify(movieId)
        }
    })
}

export function ShareFavoriteButton({ movieId }: { movieId: string[] }) {
  const onShare = async () => {
    const url = createFavoritesLink(movieId);

    await Share.share({
      message: `Check out these favorites: ${url}`,
    });
  };

    return (
        <Button title="Share Favorites" onPress={onShare}/>
    );
}