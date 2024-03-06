import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

export const ScrollScreen = (props) => {
    return (
        <SafeAreaView style={[{ flex: 1 }, props.style]} >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustKeyboardInsets={true}>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    )
}