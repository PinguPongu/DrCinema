import { SafeAreaView } from "react-native-safe-area-context";
import CinemaList from "@/components/cinema-list/cinema-list";
import { useCinmeas } from "@/hooks/data";


export default function Cinemas() {
  const cinemasList = useCinmeas();
  const sortedCinemas = [...cinemasList].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  
  return (
    <SafeAreaView>
      <CinemaList cinemas={sortedCinemas}/>
    </SafeAreaView>
  )
}
