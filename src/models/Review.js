import mongoose, { Schema } from "mongoose";

mongoose.models = {};

const reviewSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, "Quote is required"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        trim: true
    },
    company: {
        type: String,
        required: [true, "company is required"],
        trim: true
    },
    image: {
        type: String,
        required: [true, "Image URL is required"]
    },

}, {
    timestamps: true,
    // Add collection name explicitly
    collection: 'reviews'
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;

