import React from "react";
import "./header.css";
import headerImage from "../../assets/image2.png";
import Button from "../Buttons/Button";

export default function Header() {
	return (
		<div className="header">
			<div className="headerContent">
				<h1 className="headerTitle">The Gift of Happiness</h1>
				<p className="headerTagline">
					Show your gratitude with one of our gift sets, large and small,
					specially designed to spread joy to someone you love.
				</p>
				<Button
					content="SHOP NOW"
					color="#fff"
					backgroundImage="linear-gradient(to right, #EE4D67, #FFAF66  )"
					border="none"
					borderRadius="50px"
               fontWeight="bold"
				/>
			</div>
		</div>
	);
}
