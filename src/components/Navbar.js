import React, { useState } from "react";
import { StyledNav, StyledLink } from "../styles/StyledNav";

export default function Navbar() {
	const [loginActive, setLoginActive] = useState(true);
	const [profileActive, setProfileActive] = useState(false);
	const [reposActive, setReposActive] = useState(false);

	function activeLinkLogin() {
		setLoginActive(true);
		setProfileActive(false);
		setReposActive(false);
	}
	function activeLinkProfile() {
		setProfileActive(true);
		setLoginActive(false);
		setReposActive(false);
	}
	function activeLinkRepos() {
		setReposActive(true);
		setLoginActive(false);
		setProfileActive(false);
	}

	return (
		<StyledNav>
			<StyledLink
				to="/"
				active={loginActive ? "active" : ""}
				onClick={activeLinkLogin}
			>
				Log in
			</StyledLink>
			<StyledLink
				to="/profile"
				active={profileActive ? "active" : ""}
				onClick={activeLinkProfile}
			>
				Profile
			</StyledLink>

			<StyledLink
				to="/repos"
				active={reposActive ? "active" : ""}
				onClick={activeLinkRepos}
			>
				Repos
			</StyledLink>
		</StyledNav>
	);
}
