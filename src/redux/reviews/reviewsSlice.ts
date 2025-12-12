import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Review as ReviewType } from "@/src/types/review";

interface ReviewsState {
  reviews: ReviewType[];
  reviewIsLoading: boolean;
}

const initialState: ReviewsState = {
  reviews: [],
  reviewIsLoading: false,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<ReviewType>) {
      state.reviews.push(action.payload);
    },
    setReviews(state, action: PayloadAction<ReviewType[]>) {
      state.reviews = action.payload;
    },
  },
});

export const { addReview, setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
