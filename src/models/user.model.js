const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
        gender: { type: String, required: true },
        age: { type: Number, required: true },
        phone: { type: String, required: true },
        picture: { type: String, required: true },
        email: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: {type: String, required: true}
       
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
