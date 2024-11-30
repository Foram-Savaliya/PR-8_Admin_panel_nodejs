const { name } = require("ejs");
const mongoose = require("mongoose");
const subcategorySchema = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subcategory: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
const Subcategory = mongoose.model("subcategory", subcategorySchema);
module.exports = Subcategory;