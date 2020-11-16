import React from 'react';
import { Button, Dimensions, Image, View } from 'react-native';
import { connect } from 'react-redux';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const ImageScreen = props => {
	return (
		<View
			style={{
				flex: 1,
				height,
				width,
			}}>
			<Image
				source={{ uri: props.uri, cache: 'force-cache' }}
				style={{ flex: 0.9, height: height * 0.9, width }}
			/>
			<Button
				title="Back"
				style={{ flex: 0.1 }}
				onPress={() => props.navigation.goBack()}
			/>
		</View>
	);
};

let mapStateToProps = state => ({
	uri: state.gallery.modalUri,
});

export default connect(mapStateToProps)(ImageScreen);
