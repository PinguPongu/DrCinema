import { Movie as MovieType } from "@/src/types/types";
import {View, Text} from "react-native";

type movieProps = {
    movie: MovieType
};

export function Movie({movie} : movieProps){
    return (
        <View>
            <Text key={movie.id}>{movie.title}</Text>
        </View>
    )
}