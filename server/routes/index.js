const usersHandler = require("./users.route");
const placesHandler = require("./places.route");
const dashboardHandler = require("./dashboard.route");

const routes = [
	{
		path: "/users",
		handler: usersHandler,
	},
	{
		path: "/products",
		handler: placesHandler,
	},
	{
		path: "/dashboard",
		handler: dashboardHandler,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use("/api/v1" + route.path, route.handler);
	});
};
