const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxlength: [20, "Product name should not exceed more than 20 characters"]
  },
  description:{
    type: String,
    require: [true, "Please add a description of your product"],
    maxlenght: [4000, "Description can not exceed more than 4000 characters"]
  },
  price:{
    type: Number,
    required: [true, "Please add a product price"],
    maxlenght: [8, "Price should not exceed more than 8 characters"],
  },
  discountPrice: {
    type: String,
    maxlenght: [4, "Discount should not exceed more than 4 characters"],
  },
  color:{
    type: String,
  },
  size:{
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }
  ],
  category: {
    type: String,
    required: [true, "Please add category of your product"],
  },
  Stock: {
    type: Number,
    required: [true, "Please add some stocks for your product"],
    maxlenght: [3, "Stock should not exceed more than 3 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
      time: {
        type: Date,
        default: Date.now()
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Product" ,productSchema);