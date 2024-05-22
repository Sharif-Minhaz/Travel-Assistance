const router = require("express").Router();
const {
	getAllUserBookingController,
	addBookingController,
	getAllBookingController,
} = require("../controllers/booking.controller");

router.get("/", getAllBookingController);
router.get("/:buyer", getAllUserBookingController);
router.post("/", addBookingController);

module.exports = router;
