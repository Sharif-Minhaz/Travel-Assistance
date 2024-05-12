export function convertDate() {
	const today = new Date();

	const options = {
		year: "numeric",
		month: "short",
		day: "2-digit",
	};

	const formatter = new Intl.DateTimeFormat("en-US", options);
	const formattedDate = formatter.format(today);

	return formattedDate; // Output: Jul 12, 2022
}
