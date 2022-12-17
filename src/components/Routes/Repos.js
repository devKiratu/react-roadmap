import React, { useState, useEffect } from "react";
import DisplayCard from "../DisplayCard";
import { StyledRepo, Title } from "../../styles/StyledRepos";
import SearchForm from "../SearchForm";
import NotFound from "./NotFound";

export default function Repos() {
  const [displayItems, setDisplayItems] = useState([]);
  const [userName, setUserName] = useState("devkiratu");
  const [error, setError] = useState("");
  const [repoOwner, setRepoOwner] = useState("");

  const handleSearch = (query) => {
    setUserName(query);
  };

  useEffect(() => {
    async function getItems() {
      const url = `https://api.github.com/users/${userName}/repos`;

      const response = await fetch(url);
      const data = await response.json();
      data.message || data[0] === undefined
        ? setError("not found")
        : setDisplayItems(data);
      setRepoOwner(userName);
      // console.log(data);
    }
    getItems();
  }, [userName]);

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <>
          <Title>
            Displaying public github repos for <code>{repoOwner}</code>
          </Title>
          <SearchForm onSearch={handleSearch} />
          <StyledRepo>
            {displayItems.map((displayItem) => (
              <DisplayCard displayItem={displayItem} key={displayItem.id} />
            ))}
          </StyledRepo>
        </>
      )}
    </>
  );
}
