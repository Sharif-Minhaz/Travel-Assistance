const { model, Schema } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "User name is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "User email is required"],
			trim: true,
		},
		role: { type: String, required: true, enum: ["seller", "buyer"] },
		image: String,
	},
	{ timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
