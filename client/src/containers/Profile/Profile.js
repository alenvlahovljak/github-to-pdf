import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { newUser } from "../../store/actions";

import history from "../../history";

import TextareaAutosize from "react-textarea-autosize";

import "./Profile.css";

import defaultAvatar from "../../public/images/avatar.png";

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	onSubmitHandler = (e) => {
		const { newUser } = this.props;
		const { node_id } = this.props.user;
		e.preventDefault();
		const user = Array.from(document.querySelector("form")).reduce((acc, nextValue) => {
			acc[nextValue.name] = nextValue.value;
			return acc;
		}, {});
		newUser({ ...user, node_id });
	};

	componentWillMount = () => {
		const { isLoggedIn } = this.props;
		if (!isLoggedIn) return history.push("/login");
	};

	render() {
		const { login, avatar_url, name, company, blog, location, email, bio } = this.props.user;
		return (
			<div className="Profile__main">
				<div className="Profile__container">
					<nav className="Profile__navbar">
						<img className="Profile__avatar" src={avatar_url || defaultAvatar} alt="Default avatar" />
						<span className="Profile__nick">{login || "No User!"}</span>
						<Link className="Profile__logout" to="/login">
							Log Out
						</Link>
					</nav>
				</div>
				<main className="Profile__content">
					<form className="Profile__form" onSubmit={this.onSubmitHandler}>
						<div className="Profile__item">
							<label htmlFor="login">Login:</label>
							<input type="text" id="login" name="login" defaultValue={login} />
						</div>
						<div className="Profile__item">
							<label htmlFor="name">Name:</label>
							<input type="text" id="name" name="name" defaultValue={name} placeholder="What is your name?" />
						</div>
						<div className="Profile__item">
							<label htmlFor="company">Company:</label>
							<input
								type="text"
								id="company"
								name="company"
								defaultValue={company}
								placeholder="Where do you work?"
							/>
						</div>
						<div className="Profile__item">
							<label htmlFor="blog">Blog:</label>
							<input type="text" id="blog" name="blog" defaultValue={blog} placeholder="Do you have a Blog?" />
						</div>
						<div className="Profile__item">
							<label htmlFor="location">Location:</label>
							<input
								type="text"
								id="location"
								name="location"
								defaultValue={location}
								placeholder="Where do you live?"
							/>
						</div>
						<div className="Profile__item">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								defaultValue={email}
								placeholder="What is your email adress?"
							/>
						</div>
						<div className="Profile__item">
							<label htmlFor="bio">Bio:</label>
							<TextareaAutosize
								minRows="1"
								maxRows="5"
								id="bio"
								name="bio"
								defaultValue={bio}
								placeholder="Tell us your story?"
							/>
						</div>
					</form>
					<div className="Profile_buttons">
						<button onClick={this.onSubmitHandler}>Convert to JSON</button>
						<button onClick={this.onSubmitHandler}>Convert to PDF</button>
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.account.isLoggedIn,
		user: state.account.user
	};
};

export default connect(mapStateToProps, { newUser })(Profile);
