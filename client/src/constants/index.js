export const cities = {
	Dhaka: {
		name: "Dhaka",
		areas: [
			"Lalbagh Fort",
			"Ahsan Manzil",
			"Dhakeshwari Temple",
			"National Museum",
			"Liberation War Museum",
		],
	},
	Chattogram: {
		name: "Chattogram",
		areas: [
			"Cox's Bazar",
			"Saint Martin",
			"Patenga Beach",
			"Foy's Lake",
			"Ethnological Museum",
			"Kaptai Lake",
			"The War Cemetery",
		],
	},
	Sylhet: {
		name: "Sylhet",
		areas: [
			"Ratargul Swamp Forest",
			"Jaflong",
			"Madhabkunda Waterfall",
			"Lawachara National Park",
			"Shahjalal University of Science and Technology",
		],
	},
};

export const categories = [
	{
		name: "Historical & Cultural",
		image: "/categories/history.png",
	},
	{
		name: "Nature & Wildlife",
		image: "/categories/wild-animals.png",
	},
	{
		name: "Beach & Marine",
		image: "/categories/island.png",
	},
	{
		name: "Adventure",
		image: "/categories/adventurer.png",
	},
	{
		name: "Spiritual & Religious",
		image: "/categories/religions.png",
	},
	{
		name: "Ecotourism",
		image: "/categories/nature.png",
	},
	{
		name: "Rural & Community",
		image: "/categories/village.png",
	},
	{
		name: "Culinary Tourism",
		image: "/categories/food.png",
	},
];

export const packages = {
	gold: {
		name: "Gold",
		image: "/packages/gold.png",
		rate: 1.5, // Price in your chosen currency
		duration: 7, // Duration of the package
		services: [
			"7 days tour",
			"24/7 guide includes",
			"All meals included",
			"Private transportation",
			"Luxury accommodation",
			"Free entrance to all attractions",
			"Travel insurance",
			"Personal photographer",
		],
		description:
			"The Gold package offers a premium experience with top-tier services and amenities, perfect for those seeking luxury and comfort during their travels.",
	},
	silver: {
		name: "Silver",
		image: "/packages/silver.png",
		rate: 1.2, // Price in your chosen currency
		duration: 5, // Duration of the package
		services: [
			"5 days tour",
			"12/7 guide includes",
			"Shared transportation",
			"Breakfast and dinner included",
			"Discounted entrance to attractions",
			"Group activities",
			"Travel insurance",
		],
		description:
			"The Silver package provides a balanced experience with a mix of guided tours and free time, ideal for those looking for a well-rounded travel experience.",
	},
	bronze: {
		name: "Bronze",
		image: "/packages/bronze.png",
		rate: 1, // Price in your chosen currency
		duration: 3, // Duration of the package
		services: [
			"3 days tour",
			"On-call guide support",
			"Public transportation",
			"Breakfast included",
			"Basic travel insurance",
		],
		description:
			"The Bronze package is a budget-friendly option that still offers essential services and a guided experience for travelers looking to explore on a budget.",
	},
};
