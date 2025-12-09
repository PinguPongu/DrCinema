import { SafeAreaView } from "react-native-safe-area-context";
import CinemaList from "@/components/cinema-list/cinema-list";
import { useCinmeas } from "@/hooks/data";


export default function Cinemas() {
  const cinemasList = useCinmeas();

  
  return (
    <SafeAreaView>
      <CinemaList cinemas={cinemasList}/>
    </SafeAreaView>
  )
}
