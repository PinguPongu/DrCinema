import CinemaDetailsScreen from "@/src/views/cinema-details";
import { useLocalSearchParams } from "expo-router";

export default function CinemaDetails(){
    const { id } = useLocalSearchParams<{ id:string }>();
    
    return (
        <CinemaDetailsScreen id={id} />
    )
}
