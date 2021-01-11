import styled from "styled-components";

export const LoginForm = styled.form`
	margin: 0 auto;
	margin-top: 50px;
`;

export const LoginFormInput = styled.input`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 20px auto;
	padding: 20px;
	font-size: medium;
	width: 80%;
	outline: none;
	border: 1px solid #999;
	border-radius: 5px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;

	&:focus {
		border: 2px solid cornflowerblue;
	}
`;

export const LoginFormLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 20px auto;
	width: 90%;
`;

export const LoginFormButton = styled.button`
	padding: 20px;
	width: 90%;
	margin: 20px;
	border: 1px solid #999;
	border-radius: 10px;
	font-size: large;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: cornflowerblue;
	color: white;
	cursor: pointer;
`;

export const StyledSearchForm = styled.form`
	margin: 20px auto;
	border: 1px solid #999;
	width: 50%;
	min-height: 50px;
	border-radius: 10px;
	background-color: #f7f7f7;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
`;
export const SearchFormInput = styled.input`
	padding: 10px;
	border: 1px solid #999;
	border-radius: 5px;
	margin: 5px;
	width: 50%;
`;
export const SearchFormButton = styled.button`
	padding: 10px;
	margin: 10px;
	background-color: cornflowerblue;
	border: 1px solid #999;
	border-radius: 5px;
	color: white;
	width: 25%;
`;

export const SearchFormLabel = styled.label`
	margin: 5px;
	width: 25%;
`;
