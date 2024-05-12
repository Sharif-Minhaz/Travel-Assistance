const router = require("express").Router();
const {
	getSellerController,
	getAdminController,
	getUserController,
	addUserController,
	deleteUserController,
} = require("../controllers/user.controller");

router.get("/", getUserController);
router.delete("/:id", deleteUserController);
router.post("/", addUserController);

router.get("/seller/:email", getSellerController);
router.get("/admin/:email", getAdminController);

module.exports = router;
