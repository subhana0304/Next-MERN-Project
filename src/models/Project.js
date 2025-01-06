import mongoose, { Schema } from "mongoose";

// Delete the model if it exists to prevent the 
// "Cannot overwrite model once compiled" error in development
mongoose.models = {};

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true
  },
  image: {
    type: String,
    required: [true, "Image URL is required"]
  },
  tags: {
    type: [String],
    default: []
  },
  link: {
    type: String,
    default: ""
  },
  isLatest: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  // Add collection name explicitly
  collection: 'projects'
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

