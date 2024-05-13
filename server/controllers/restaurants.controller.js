const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/Restaurant.model");

exports.getRestaurantByEmail = asyncHandler(async (req, res) => {
	const email = req.query.email;
	const query = { email: email };

	const restaurant = await Restaurant.find(query);

	res.status(200).json({
		message: "Restaurant information",
		restaurant,
	});
});

exports.deleteRestaurantController = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const result = await Restaurant.findByIdAndDelete(id);

	res.status(200).json({ message: "Restaurant deleted", restaurant: result });
});

exports.getRestaurantDetailsController = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const restaurant = await Restaurant.findById(id);

	res.status(200).json({
		message: "Restaurant information",
		restaurant,
	});
});

exports.addRestaurantController = asyncHandler(async (req, res) => {
	const data = req.body;

	const result = await Restaurant.create(data);

	res.status(200).json({
		message: "Restaurant added",
		restaurant: result,
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

		const findRestaurants = await Restaurant.find({
			city: city,
			month: month,
			category: { $in: rentType },
			room: { $in: bedAmount },
			bath: { $in: washAmount },
		})
			.sort({ rent: price })
			.lean();

		res.status(200).json({
			message: "Restaurant found",
			restaurants: findRestaurants,
		});
	} else {
		const sortRestaurant = await Restaurant.find(query).sort({ createdAt: -1 });

		res.status(200).json({
			message: "Restaurant found",
			restaurants: sortRestaurant,
		});
	}
});

exports.getAllRestaurants = asyncHandler(async (req, res) => {
	const query = {};

	const restaurants = await Restaurant.find(query).lean();

	res.status(200).json({ message: "Restaurant information", restaurants });
});

exports.sortRestaurantController = asyncHandler(async (req, res) => {
	const city = req.query.city;
	const area = req.query.area;
	const rent = req.query.rent;

	const sortRestaurants = await Restaurant.find({
		city: city,
		area: area,
		category: rent,
	}).lean();

	res.status(200).json({ message: "Sorted restaurant", restaurants: sortRestaurants });
});

exports.categoryWiseDataController = asyncHandler(async (req, res) => {
	const title = req.query.title;
	const restaurants = await Restaurant.find({ category: title }).lean();

	res.status(200).json({
		message: "Category wise data found",
		restaurants,
	});
});
