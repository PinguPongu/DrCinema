import { MovieDetails } from "@/src/views/moviedetails";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetailsScreen(){
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={10}
            >
                <MovieDetails />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
