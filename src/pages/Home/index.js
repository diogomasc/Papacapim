import { StyleSheet, View, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PapacapimCard from "../../components/PapacapimCard";
import { DummyData } from "../../DummyData/DummyData";
import DiogoImage from "../../assets/Foto_Perfil_Diogo_Mascarenhas.jpg";

const Home = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerTitleAlign: "center",
			headerLeft: () => (
				<Image
					style={{
						height: 35,
						width: 35,
						borderRadius: 15,
						marginLeft: 15,
						resizeMode: "cover",
					}}
					source={DiogoImage}
				/>
			),
			headerTitle: () => (
				<FontAwesome5 name="twitter" size={25} color={"#6B6572"} />
			),
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<FlatList
				data={DummyData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<PapacapimCard
						profileUri={item.prof}
						id={item.id}
						name={item.name}
						verified={item.verified}
						imageUri={item.image}
						papacapimContent={item.tweet}
						timestamp={item.time}
						likesCount={item.like}
						republicationsCount={item.rt}
						repliesCount={item.reply}
					/>
				)}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},
});
