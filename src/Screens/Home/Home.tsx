import { Text, View } from "react-native";
import Positions from "../../assets/styles/Positions";
import Card from "../../Components/Card/Card";

export default function HomeScreen() {
	return (
		<View style={Positions.flexColumn}>
			<Card/>
			<Text>Home Screen</Text>
		</View>
	);
}
