import React from "react";
import { StyledCard, StyledP } from "../styles/StyledCard";

export default function DisplayCard({ displayItem }) {
	return (
		<StyledCard>
			<h4>Repo name: {displayItem.name}</h4>
			<StyledP>
				<code>
					<strong>Description: </strong> {displayItem.description}
				</code>
			</StyledP>
			<StyledP>
				<code>
					<strong>Link: </strong>
					<a href={displayItem.html_url}>{displayItem.html_url}</a>
				</code>
			</StyledP>
		</StyledCard>
	);
}
