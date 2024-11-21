import React from "react";

export function Section({ children, variable, value }) {
	return (
	  variable === value && children
	);
}