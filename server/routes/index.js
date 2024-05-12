const usersHandler = require("./users.route");
const restaurantHandler = require("./restaurants.route");

const routes = [
	{
		path: "/users",
		handler: usersHandler,
	},
	{
		path: "/products",
		handler: restaurantHandler,
	},
	{
		path: "/dashboard",
		handler: restaurantHandler,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use("/api/v1" + route.path, route.handler);
	});
};
