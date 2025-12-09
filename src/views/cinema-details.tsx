import CinemaDetailsItem from "@/components/cinema-details/cinema-details";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { useCinmeas } from "@/hooks/data";

type props = {
  id: string,
};

export default function CinemaDetailsScreen({ id }: props) {
  const cinemasList = useCinmeas();
  const cinema = cinemasList.find((cinema) => String(cinema.id) === id);

  if (!cinema) {
    return (
      <SafeAreaView>
        <Text>Cinema not found</Text>
      </SafeAreaView>
    )
  }
  
  return (
    <View>
      <ScrollView>
        <CinemaDetailsItem cinema={cinema}/>
      </ScrollView>
    </View>
  )
}
