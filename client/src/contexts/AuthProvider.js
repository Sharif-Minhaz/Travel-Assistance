import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import axios from "../lib/axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Google sign in
	const loginInWithGoogle = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const updateUser = (userInfo) => {
		setLoading(true);
		axios
			.patch(`/users/${user._id}`, userInfo)
			.then((res) => {
				setUser({
					...user,
					photoURL: res.data?.user?.photoURL,
					displayName: res.data?.user?.displayName,
				});
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
		return updateProfile(auth.currentUser, userInfo);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				axios.get(`/users/current/${currentUser.email}`).then((res) => {
					setUser({
						...currentUser,
						photoURL: res.data?.user?.photoURL,
						_id: res.data?.user?._id,
					});
					setLoading(false);
				});
			} else {
				setUser({});
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		loginInWithGoogle,
		createUser,
		signIn,
		updateUser,
		logOut,
		user,
		loading,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
