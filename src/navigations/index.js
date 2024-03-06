import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BasicNavigator from './basicNavigator';

const Navigator = props => {

    return (
        <NavigationContainer>
            <BasicNavigator />
        </NavigationContainer>
    );
};

export default Navigator;