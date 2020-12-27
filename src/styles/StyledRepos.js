import styled from "styled-components";

export const StyledRepo = styled.div`
	width: 60%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2%;

	@media (max-width: 786px) {
		grid-template-columns: 1fr;
	}
`;

export const Title = styled.h2`
	padding: 20px;
	text-align: center;
`;
