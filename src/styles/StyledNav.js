import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.ul`
	min-width: 100vw;
	box-sizing: border-box;
	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 8vh;
	background-color: black;
	margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: yellow;
	padding-bottom: 5px;
	${(props) =>
		props.active &&
		css`
			border-bottom: 3px solid yellow;
			transform: scale(1.05);
			transition: ease 0.1s all;
		`}
`;
