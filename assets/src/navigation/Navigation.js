import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <NavigationContainer>

            <Drawer.Navigator initialRouteName="Home">

                <Drawer.Screen name="Home" component={Home} />

                <Drawer.Screen name="Profile" component={Profile} />

            </Drawer.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;