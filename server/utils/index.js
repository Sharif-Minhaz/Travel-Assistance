const formatDateTime = (dateTime) => {
	const options = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true, // Use 12-hour format
	};

	const formattedDate = dateTime.toLocaleString("en-US", options);

	return formattedDate;
	// Output: 06/02/2024, 10:00:00 AM
};

module.exports = { formatDateTime };
