import React from "react";
import {
	StyledSearchForm,
	SearchFormInput,
	SearchFormButton,
	SearchFormLabel,
} from "../styles/Form";

export default function SearchForm({ userName, setUserName, getItems }) {
	function handleSubmit(e) {
		e.preventDefault();
		getItems();
		setUserName("");
	}

	return (
		<StyledSearchForm onSubmit={(e) => handleSubmit(e)}>
			<SearchFormLabel htmlFor="search-user">Search User</SearchFormLabel>
			<SearchFormInput
				type="text"
				name="search-user"
				placeholder="Search github"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<SearchFormButton>Search</SearchFormButton>
		</StyledSearchForm>
	);
}
