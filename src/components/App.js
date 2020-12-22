import React, { useState } from "react";
import Login from "./Login";

export default function App() {
	const [userName, setUserName] = useState("");
	const [pwd, setPwd] = useState("");

	return (
		<div>
			<Login
				userName={userName}
				setUserName={setUserName}
				pwd={pwd}
				setPwd={setPwd}
			/>
		</div>
	);
}
