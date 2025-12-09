import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import CinemaList from "@/components/cinema-list/cinema-list";


export default function Cinemas() {
  const cinemasList = useSelector((state:RootState) => state.cinemas.cinemas);

  
  return (
    <SafeAreaView>
      <CinemaList cinemas={cinemasList}/>
    </SafeAreaView>
  )
}
