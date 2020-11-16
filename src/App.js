import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ImageScreen from './components/ImageScreen';
import MenuList from './components/menuList';
import { Provider } from 'react-redux';
import store from './redux/store';

let RootStack = createStackNavigator();
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<RootStack.Navigator mode="modal" initialRouteName="Home">
						<RootStack.Screen name="Home" component={MenuList} />
						<RootStack.Screen
							name="Modal"
							component={ImageScreen}
						/>
					</RootStack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
