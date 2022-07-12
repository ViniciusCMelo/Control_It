import React from "react";

import { StyleSheet } from "react-native";

let Positions = StyleSheet.create({
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	flexRow: {
		marginHorizontal: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	centeredFlex: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center", }
});

export default Positions;

