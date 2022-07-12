import React from "react";

import { Text, View, StyleSheet } from "react-native";
import Positions from "../../assets/styles/Positions";
import Shapes from "../../assets/styles/Shapes";

const Card = () => {
	return (
		<View style={Positions.flexRow}>
			<View style={Shapes.rounded}/>
			<View style={Positions.centeredFlex}>
				<Text>Hi Vinícius!</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Card;
