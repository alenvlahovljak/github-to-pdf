import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";

import history from "./history";

import { LandingPage, Profile } from "./containers";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Route exact path="/login" component={LandingPage} />
				<Route exact path="/profile" component={Profile} />
				<Route>
					<Redirect to="/login" />
				</Route>
			</Router>
		);
	}
}

export default App;
