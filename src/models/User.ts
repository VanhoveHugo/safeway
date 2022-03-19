import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The user name is required"],
      unique: false,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.User || model("User", TaskSchema);