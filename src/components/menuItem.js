import React from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

function MenuItem(props) {
	return (
		<View>
			<View>
				<Image
					source={{ uri: props.uri, cache: 'force-cache' }}
					style={{ height: 200, width: 200 }}
				/>
			</View>
			<View>
				<Text>Author:{props.author}</Text>
			</View>
		</View>
	);
}

function Gallery(props) {
	let renderItem = ({ item }) => (
		<View>
			<TouchableOpacity
				onPress={() => {
					props.setModal(item.uri);
					props.navigation.navigate('Modal');
				}}>
				<MenuItem uri={item.preview_uri} author={item.author} />
				<View style={styles.description}>
					<Text style={styles.description}>{item.author}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	return (
		<FlatList
			style={{ flex: 1 }}
			data={props.images}
			numColumns={1}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			onEndReached={() => {
				props.addImages(props.page);
			}}
			onEndReachedThreshold={0.2}
			refreshing={false}
			showsVerticalScrollIndicator={true}
		/>
	);
}

export default Gallery;

const styles = StyleSheet.create({
	descriptionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginTop: 10,
		padding: 10,
	},

	description: {
		fontSize: 10,
		fontStyle: 'italic',
	},
});
