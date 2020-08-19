import { LOGIN, LOGOUT } from "../actionTypes";

const DEFAULT_STATE = {
	user: {
		isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
		user: JSON.parse(localStorage.getItem("user")) || null,
		clientID: process.env.REACT_APP_URL,
		proxyURL: process.env.REACT_APP_PROXY_URL,
		redirectURI: process.env.REACT_APP_REDIRECT_URI,
		secretKey: process.env.REACT_APP_SECRET_KEY
	}
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn));
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			console.log("ISLOGGEDIN: ", action.payload.isLoggedIn);
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				user: action.payload.user
			};
		case LOGOUT:
			localStorage.clear();
			return {
				...state,
				isLoggedIn: false,
				user: null
			};
		default:
			return state;
	}
};
