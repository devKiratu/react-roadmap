import React from "react";
import { StyledNav, StyledLink } from "../styles/StyledNav";

export default function Navbar() {
	return (
		<StyledNav>
			<StyledLink exact to="/" activeStyle>
				Log in
			</StyledLink>
			<StyledLink to="/profile" activeStyle>
				Profile
			</StyledLink>

			<StyledLink to="/repos" activeStyle>
				Repos
			</StyledLink>
		</StyledNav>
	);
}
