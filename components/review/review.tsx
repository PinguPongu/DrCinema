import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useState } from "react";
import { Review as ReviewType } from "@/src/types/review";
import { addReview } from "@/src/redux/reviews/reviewsSlice";
import { saveReviewsToStorage } from "@/src/services/reviewStorage";

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
        <Text>{review.stars}</Text>
        <Text>{review.body}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Write a review:</Text>
      <TextInput
        keyboardType="numeric"
        value={String(stars)}
        onChangeText={(text) => {
          const number = Number(text);
          if (!Number.isNaN(number)) setStars(number);
        }}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Post Review" onPress={handleNewReview}/>
    </View>
  )
}
