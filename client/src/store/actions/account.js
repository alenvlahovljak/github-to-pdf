import * as actionTypes from "../actionTypes";

import { addErrorMessage, removeErrorMessage, addSuccessMessage, removeSuccessMessage } from ".";

import { authenticateUserAPI } from "../../services/api";

export const handleAuthenticateUser = (account) => {
	return {
		type: actionTypes.LOGIN,
		account
	};
};

export const authenticateUser = ({ code }) => {
	return async (dispatch) => {
		try {
			const user = await authenticateUserAPI("POST", "/auth", {
				client_id: process.env.REACT_APP_CLIENT_ID,
				code,
				redirect_uri: process.env.REACT_APP_REDIRECT_URI
			});
			dispatch(handleAuthenticateUser({ isLoggedIn: true, user: { ...user.data } }));
		} catch (err) {
			console.log("HERE");
			const { data } = err.response;
			console.log("MSG", data.message);
			dispatch(removeSuccessMessage());
			dispatch(addErrorMessage({ message: data.message }));
		}
	};
};
