import mongoose from "mongoose";

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // Exclude it from get from DB function:
    select: false,
  },
  name: String,
  role: String,
});

userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model("User", userSchema);
