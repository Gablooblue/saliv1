import React from 'react';
import { View, Text } from 'react-native';
import { deviceWidth } from '../utils/dimensions.js';

const TPAText = ({ text }) => {
    const { containerStyle, bodyStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={bodyStyle}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: 'rgba(211,211,211, 0.7)',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0
    },
    bodyStyle: {
        fontSize: deviceWidth * 0.04,
        color: '#000',
        textAlign: 'center'

    },
};

export default TPAText;
