import axios from "axios";

const instance = axios.create({
	// baseURL: "https://dinepal.onrender.com/api/v1",
	baseURL: "http://localhost:5000/api/v1",
	timeout: 15000,
	headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
});

export default instance;
