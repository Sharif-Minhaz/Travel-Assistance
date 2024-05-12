const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			default: 3,
		},
		text: String,
	},
	{
		timestamps: true,
	}
);

const Review = model("Review", reviewSchema);

module.exports = Review;
