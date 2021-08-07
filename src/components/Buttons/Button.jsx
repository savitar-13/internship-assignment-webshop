import React from "react";
import "./button.css";

export default function Button(props) {
	return (
		<button
			className="btnComponent"
			style={{
				background: props.background,
				outline: "none",
				border: props.border,
				borderRadius: props.borderRadius,
				color: props.color || "black",
				backgroundImage: props.backgroundImage || "none",
				padding: props.padding || ".8rem 1.5rem",
				fontWeight: props.fontWeight || "normal"
				
			}}
		>
			{props.content}
		</button>
	);
}
