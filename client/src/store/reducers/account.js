import { LOGIN, LOGOUT } from "../actionTypes";

const DEFAULT_STATE = {
	isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
	user: JSON.parse(localStorage.getItem("user")) || null
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOGIN:
			const { isLoggedIn, user } = action.account;
			isLoggedIn = false;
			localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
			localStorage.setItem("user", JSON.stringify(user));
			return {
				...state,
				isLoggedIn,
				user: { ...user }
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
