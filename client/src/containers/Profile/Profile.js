import React, { Component } from "react";
import { connect } from "react-redux";

import history from "../../history";

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount = () => {
		const { isLoggedIn } = this.props;
		if (!isLoggedIn) return history.push("/login");
	};

	render() {
		return <div>Profile</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.account.isLoggedIn
	};
};

export default connect(mapStateToProps)(Profile);
