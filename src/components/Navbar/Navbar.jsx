import React from "react";
import Button from "../Buttons/Button";
import "./navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navLinks">
				<ul className="navList">
					<li className="navListItem">
						<select name="" id="navDropdown">
							<option value="">Products </option>
						</select>
					</li>
					<li className="navListItem">Collections</li>
					<li className="navListItem">Gifts</li>
					<li className="navListItem">Our Magazine</li>
				</ul>
			</div>

			<div className="navButtons">
				<i className="navSearchIcon fas fa-search"></i>
				<Button
					content="Login"
					background="transparent"
					border="none"
					borderRadius="20px"
					fontWeight="bold"
				/>
				<Button
					content="SIGN UP"
					color="#fff"
					backgroundImage="linear-gradient(to right, #EE4D67, #FFAF66)"
					border="none"
					borderRadius="50px"
					fontWeight="bold"
				/>
			</div>
		</div>
	);
}
