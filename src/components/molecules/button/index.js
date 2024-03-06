import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Colors } from '_styles';
import { Icone } from '_atoms/icon';
import { Scale, VerticalScale } from '_functions/tela';

export const IconButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            testID={props.testID}
            style={[styles.icon, props.style]}>
            <Icone
                name={props.name}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    )
}

export const IconButtonText = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonContainer}>
            <Text style={[styles.buttonItem, {
                color: props.color,
                fontSize: Scale(props.size)
            }]}>
                {props.text}
            </Text>
            <Icone
                style={styles.buttonItem}
                name={props.icon}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        paddingHorizontal: Scale(5),
    },
    buttonContainer: {
        backgroundColor: Colors.BRAND_PRIMARY_2,
        padding: Scale(10),
        marginHorizontal: Scale(30),
        marginVertical: VerticalScale(10),
        borderRadius: Scale(12),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'

    },
    buttonItem: {
        paddingHorizontal: Scale(5),
    }
});

