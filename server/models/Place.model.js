const { model, Schema } = require("mongoose");

const placeSchema = new Schema(
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
		address: {
			type: String,
			required: [true, "Address is required"],
			trim: true,
		},
		phone: {
			type: String,
			required: [true, "Phone is required"],
			trim: true,
		},
		rent: {
			type: Number,
			required: [true, "Rent is required"],
			min: 1000,
		},
		month: {
			type: String,
			required: [true, "Month is required"],
			trim: true,
		},
		area: {
			type: String,
			required: [true, "Area is required"],
			trim: true,
		},
		bath: {
			type: Number,
			required: [true, "bath is required"],
		},
		category: {
			type: String,
			required: [true, "Category is required"],
			trim: true,
		},
		city: {
			type: String,
			required: [true, "City is required"],
			trim: true,
		},
		details: {
			type: String,
			required: [true, "Details is required"],
			trim: true,
		},
		elevator: {
			type: String,
			enum: ["Available", "Not Available"],
			default: "Not Available",
		},
		gas: {
			type: String,
			enum: ["Available", "Not Available"],
			default: "Not Available",
		},
		garage: {
			type: Number,
			required: [true, "Garage information is required"],
		},
		kitchen: {
			type: Number,
			required: [true, "Kitchen information is required"],
		},
		propertySize: {
			type: Number,
			required: [true, "Property Size information is required"],
		},
		room: {
			type: Number,
			required: [true, "Room information is required"],
		},
		title: {
			type: String,
			required: [true, "title is required"],
			trim: true,
		},
		image: {
			type: String,
			required: [true, "Image is required"],
			trim: true,
		},
	},
	{ timestamps: true }
);

const Place = model("Place", placeSchema);

module.exports = Place;
