import getReviews from "../lib/getReviews"
import ReviewSectionClient from "./ReviewSectionClient"


export default async function ReviewSection() {
  const {reviews} = await getReviews();
  
  
  return <ReviewSectionClient reviews={reviews}  />
}