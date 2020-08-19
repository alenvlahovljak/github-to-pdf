import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";

import history from "./history";

import { LandingPage } from "./containers";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path="/" component={LandingPage} />
				<Route path="/profile" />
				<Route>
					<Redirect to="/" />
				</Route>
			</Router>
		);
	}
}

export default App;
