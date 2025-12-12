import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useState } from "react";
import { Review as ReviewType } from "@/src/types/review";
import { addReview } from "@/src/redux/reviews/reviewsSlice";
import { saveReviewsToStorage } from "@/src/services/reviewStorage";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type ReviewProps = {
  id: number,
};

export default function Review({ id }: ReviewProps) {
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  
  const review = reviews.find(review => review.id === id);

  const [stars, setStars] = useState<number>(review?.stars ?? 0);
  const [body, setBody] = useState<string>(review?.body ?? "");

  const handleNewReview = async () => {
    if (review) return;

    if (stars < 1 || stars > 5) return;

    const newReview: ReviewType = {
      id,
      stars,
      body,
    };

    dispatch(addReview(newReview));

    await saveReviewsToStorage([...reviews.filter(review => review.id !== id), newReview]);
  };

  if (review) {
    return (
      <View>
        <Text style={styles.title}>Your review:</Text>
        <View style={styles.starContainer}>
          {[1,2,3,4,5].map(value => (
            <Ionicons
              key={value}
              name={value <= stars ? "star": "star-outline"}
              size={30}
              color={value <= stars ? "#FFD700": "#CCC"}
            />
          ))}
        </View>
        <Text>{review.body}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.title}>Write a review:</Text>
      <View style={styles.starContainer}>
        {[1,2,3,4,5].map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setStars(value)}
          >
            <Ionicons
              name={value <= stars ? "star": "star-outline"}
              size={30}
              color={value <= stars ? "#FFD700": "#CCC"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        value={body}
        onChangeText={setBody}
        multiline
        placeholder="Write your review: "
        style={styles.reviewField}
      />
      <Button
        title="Post Review"
        onPress={handleNewReview}
        disabled={stars < 1 || stars > 5}
      />
    </View>
  )
}
