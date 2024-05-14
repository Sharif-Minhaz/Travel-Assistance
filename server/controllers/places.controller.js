const asyncHandler = require("express-async-handler");
const Place = require("../models/Place.model");

exports.getRestaurantByEmail = asyncHandler(async (req, res) => {
	const email = req.query.email;
	const query = { email: email };

	const place = await Place.find(query);

	res.status(200).json({
		message: "Place information",
		place,
	});
});

exports.deleteRestaurantController = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const result = await Place.findByIdAndDelete(id);

	res.status(200).json({ message: "Place deleted", place: result });
});

exports.getRestaurantDetailsController = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const place = await Place.findById(id);

	res.status(200).json({
		message: "Place information",
		place,
	});
});

exports.addRestaurantController = asyncHandler(async (req, res) => {
	const data = req.body;

	const result = await Place.create(data);

	res.status(200).json({
		message: "Place added",
		place: result,
	});
});

exports.getRestaurantCollectionController = asyncHandler(async (req, res) => {
	const query = req.query;

	if (Object.keys(query).length) {
		let price = query.price;
		if (price === "Low to High") {
			price = 1;
		} else {
			price = -1;
		}

		const city = query.city;
		const month = query.month;
		const rentType = query.rentType.split(",");
		const bedAmountStr = query.bedAmount.split(",");
		const bedAmount = bedAmountStr.map((bed) => parseInt(bed));
		const washAmountStr = query.washAmount.split(",");
		const washAmount = washAmountStr.map((wash) => parseInt(wash));

		const findRestaurants = await Place.find({
			city: city,
			month: month,
			category: { $in: rentType },
			room: { $in: bedAmount },
			bath: { $in: washAmount },
		})
			.sort({ rent: price })
			.lean();

		res.status(200).json({
			message: "Place found",
			places: findRestaurants,
		});
	} else {
		const sortRestaurant = await Place.find(query).sort({ createdAt: -1 });

		res.status(200).json({
			message: "Place found",
			places: sortRestaurant,
		});
	}
});

exports.getAllRestaurants = asyncHandler(async (req, res) => {
	const query = {};

	const places = await Place.find(query).lean();

	res.status(200).json({ message: "Place information", places });
});

exports.sortRestaurantController = asyncHandler(async (req, res) => {
	const city = req.query.city;
	const area = req.query.area;
	const rent = req.query.rent;

	const sortRestaurants = await Place.find({
		city: city,
		area: area,
		category: rent,
	}).lean();

	res.status(200).json({ message: "Sorted place", places: sortRestaurants });
});

exports.categoryWiseDataController = asyncHandler(async (req, res) => {
	const title = req.query.title;
	const places = await Place.find({ category: title }).lean();

	res.status(200).json({
		message: "Category wise data found",
		places,
	});
});
