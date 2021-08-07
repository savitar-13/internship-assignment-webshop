import React from "react";
import Tile from "../Tiles/Tile";
import "./body.css";
import tileImageOne from "../../assets/image1.png";
import tileImageTwo from "../../assets/image3.png";

export default function Body() {
	return (
		<div className="body">
			<Tile
				title="Ready for autumn collection"
				para="Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you."
				image={tileImageTwo}
			/>
			<Tile
				title="Ready for autumn collection"
				para="Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you."
				image={tileImageOne}
			/>
		</div>
	);
}
