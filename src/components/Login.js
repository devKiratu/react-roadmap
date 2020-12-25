import React from "react";
import { LogInScreen, CopyrightIcon } from "../styles/LogInScreen";
import {
	LoginForm,
	LoginFormButton,
	LoginFormInput,
	LoginFormLabel,
} from "../styles/Form";

export default function Login(props) {
	const { userName, setUserName, pwd, setPwd } = props;
	return (
		<LogInScreen>
			<h3>Sign in to proceed : </h3>
			<LoginForm>
				<LoginFormLabel htmlFor="username">Username</LoginFormLabel>
				<LoginFormInput
					type="text"
					placeholder="Enter username or email here"
					name="username"
					id="username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<LoginFormLabel htmlFor="password">Password</LoginFormLabel>
				<LoginFormInput
					type="password"
					placeholder="Enter password here"
					name="password"
					id="password"
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
				/>
				<LoginFormButton type="submit">Sign in</LoginFormButton>
			</LoginForm>
			<CopyrightIcon>©</CopyrightIcon>
		</LogInScreen>
	);
}
