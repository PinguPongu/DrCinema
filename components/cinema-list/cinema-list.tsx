import { Cinema as CinemaType } from "@/src/types/types";
import { View } from "react-native";
import CinemaItem from "../cinema-item/cinema-item";


type CinemaProps = {
  cinemas: CinemaType[],
};


export default function CinemaList({ cinemas }: CinemaProps) {

  return (
    <View>
      {cinemas.map((cinema) => (
        <CinemaItem key={cinema.id} cinema={cinema}/>
      ))}
    </View>
  )
}
