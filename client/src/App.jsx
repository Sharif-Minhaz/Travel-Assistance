import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div className="">
			<RouterProvider router={router} />
			<Toaster position="top-right" reverseOrder={false} />
		</div>
	);
}

export default App;
