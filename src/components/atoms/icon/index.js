import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scale } from '_functions/tela';

export const Icone = ({ name, color, size, style }) => (
    <Icon
        name={name}
        color={color}
        size={Scale(size)}
        style={style}
    />
);
