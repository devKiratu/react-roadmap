import React from "react";
import styled from "styled-components";

const Centred = styled.div`
	width: 100vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: red;
`;
export default function NotFound() {
	return <Centred>Sorry, page not found 😔</Centred>;
}
