import * as actionTypes from "../actionTypes";

import { authenticateUserAPI } from "../../services/api";

export const handleAuthenticateUser = (user) => {
	return {
		type: actionTypes.LOGIN,
		user
	};
};

export const authenticateUser = (data) => {
	return async (dispatch) => {
		try {
			const user = await authenticateUserAPI("POST", "/auth", data);
			console.log("USER", user);
		} catch (err) {}
	};
};
