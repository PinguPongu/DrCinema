import { useLocalSearchParams } from "expo-router";
import { Movie as MovieType } from "../types/types";
import { View, Text } from "react-native";



export function MovieDetails(){
   const { cinemaId, movie} = useLocalSearchParams<{cinemaId?:string; movie?:string}>();
   const movieData = movie ? JSON.parse(movie) as MovieType : null;
   const cinemaIdInt = cinemaId ? Number(cinemaId) : undefined;

   return (
    <View>
        <Text key={movieData?.id}>{movieData?.title}</Text>
    </View>
   );
}