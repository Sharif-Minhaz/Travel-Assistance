const router = require("express").Router();
const {
	getRestaurantCollectionController,
	getAllRestaurants,
	getRestaurantByEmail,
	categoryWiseDataController,
	sortRestaurantController,
	addRestaurantController,
	deleteRestaurantController,
	getRestaurantDetailsController,
} = require("../controllers/restaurants.controller");

router.get("/", getRestaurantByEmail);
router.get("/details/:id", getRestaurantDetailsController);
router.get("/productCollection", getRestaurantCollectionController);

router.delete("/:id", deleteRestaurantController);
router.post("/productCollection", addRestaurantController);

router.get("/allProducts", getAllRestaurants);
router.get("/sortProducts", sortRestaurantController);
router.get("/categoryWiseData", categoryWiseDataController);

module.exports = router;
