import React, { useState } from "react";
import {
  StyledSearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormLabel,
} from "../styles/Form";

export default function SearchForm({ setUserName }) {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUserName(query);
    setQuery("");
  }

  return (
    <StyledSearchForm onSubmit={(e) => handleSubmit(e)}>
      <SearchFormLabel htmlFor="search-user">Search User</SearchFormLabel>
      <SearchFormInput
        type="text"
        name="search-user"
        placeholder="Search github"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchFormButton>Search</SearchFormButton>
    </StyledSearchForm>
  );
}
