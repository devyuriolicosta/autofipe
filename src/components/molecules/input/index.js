import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Scale, VerticalScale } from '_functions/tela';
import { Colors } from '_styles';
import { IconButton } from '_molecules/button';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { Icone } from '_atoms/icon';
import { useFocusEffect } from '@react-navigation/native';

export const ComboBox = (props) => {
    const dropdownController = useRef(null);
    return (
        <AutocompleteDropdown
            ref={props.useRef}
            controller={controller => {
                dropdownController.current = controller;
                if (props.controllerRef) {
                    props.controllerRef.current = controller
                }
            }}
            clearOnFocus={true}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={props.selectedValue ? props.selectedValue : { id: null }}
            dataSet={props.items}
            onSelectItem={props.onSelectItem}

            RightIconComponent={
                <Icone
                    name={'sort-down'}
                    size={20}
                    color={Colors.BRAND_PRIMARY_1}
                />}
            onRightIconComponentPress={() => {
                dropdownController.current?.toggle()
            }}
            showChevron={false}
            textInputProps={{
                placeholder: props.placeholder,
                autoCorrect: false,
                autoCapitalize: 'none',
                style: {
                    color: Colors.GRAY_MID_DARK,
                    fontSize: Scale(14)
                },
                placeholderTextColor: Colors.GRAY_MID_DARK
            }}
            rightButtonsContainerStyle={{
                justifyContent: 'center',
                alignSelf: 'center',
                paddingRight: Scale(10)
            }}
            showClear={false}
            emptyResultText={props.emptyResultText ? props.emptyResultText : 'Não encontrado'}
            inputContainerStyle={[{
                backgroundColor: Colors.WHITE,
                marginTop: VerticalScale(5),
                borderRadius: Scale(10),
                marginBottom: VerticalScale(10),
                marginHorizontal: Scale(20),
                shadowColor: Colors.BLACK,
                shadowOffset: {
                    height: VerticalScale(4),
                    width: Scale(8)
                },
                height: Scale(40),
                shadowOpacity: 0.1,
                shadowRadius: Scale(8),
                elevation: Platform.OS == 'ios' ? Scale(10) : Scale(5),
            }, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        height: Scale(40),
        padding: Platform.OS === 'ios' ? Scale(11) : Scale(1),
        marginTop: VerticalScale(5),
        borderRadius: Scale(10),
        marginBottom: VerticalScale(10),
        marginHorizontal: Scale(20),
        shadowColor: Colors.BLACK,
        shadowOffset: {
            height: VerticalScale(4),
            width: Scale(8)
        },
        shadowOpacity: 0.1,
        shadowRadius: Scale(8),
        elevation: Platform.OS == 'ios' ? Scale(10) : Scale(5),
    },
    input: {
        flex: 1,
        paddingVertical: 0,
        fontSize: Scale(14)
    },
    comboBox: {
        inputAndroid: {
            color: Colors.GRAY_MID_DARK,
            fontSize: Scale(14),
        },
        inputIOS: {
            color: Colors.GRAY_MID_DARK,
            fontSize: Scale(14)
        }
    },
    icone: {
        justifyContent: 'center',
        paddingRight: Scale(5)
    }
})
