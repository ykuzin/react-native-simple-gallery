import { Text, View } from 'react-native';

import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Gallery from './menuItem';
import { addImages, getImages, setModal } from '../redux/thunks';
import { nextPage } from '../redux/actions';

const MenuList = props => {
	useEffect(() => {
		props.getImages(props.page);
	}, []);

	if (props.isFetching)
		return (
			<View>
				<Text>Data is loading....</Text>
			</View>
		);

	if (props.error)
		return (
			<View>
				<Text>{error.message}</Text>
			</View>
		);

	return <Gallery images={props.images} {...props} />;
};

let mapStateToProps = state => ({
	images: state.gallery.images,
	isFetching: state.gallery.isFetching,
	page: state.gallery.page,
	error: state.gallery.error,
	modalUri: state.gallery.modalUri,
});

export default connect(mapStateToProps, {
	getImages,
	nextPage,
	addImages,
	setModal,
})(MenuList);
