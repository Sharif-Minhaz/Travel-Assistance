import { useEffect } from "react";

// Dynamic title
const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} | DinePal`;
	}, [title]);
};

export default useTitle;
