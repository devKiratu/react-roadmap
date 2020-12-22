import React from "react";

export default function Login(props) {
	const { userName, setUserName, pwd, setPwd } = props;
	return (
		<div className="login-screen">
			<h3>Sign in to proceed</h3>
			<form>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Enter username or email here"
					name="username"
					id="username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="Enter password here"
					name="password"
					id="password"
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
				/>
				<button type="submit">Sign in</button>
			</form>
			<p className="copyright">©</p>
		</div>
	);
}
