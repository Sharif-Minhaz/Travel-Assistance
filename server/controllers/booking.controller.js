const Booking = require("../models/Booking.model");
const asyncHandler = require("express-async-handler");

exports.getAllUserBookingController = asyncHandler(async (req, res) => {
	const { buyer } = req.params;
	const userBookings = await Booking.find({ buyer }).populate("buyer place").lean();

	res.status(200).json({
		message: "User booking information",
		bookings: userBookings,
	});
});

exports.getAllBookingController = asyncHandler(async (req, res) => {
	const userBookings = await Booking.find().populate("buyer place").lean();

	res.status(200).json({
		message: "Booking information",
		bookings: userBookings,
	});
});

exports.addBookingController = asyncHandler(async (req, res) => {
	const addBooking = await Booking.create(req.body);

	if (addBooking) {
		return res.status(201).json({
			message: "User booking added",
			booking: addBooking,
		});
	}

	res.status(500).json({
		message: "User booking not added",
	});
});
