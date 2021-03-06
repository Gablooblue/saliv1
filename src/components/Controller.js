import React from 'react';
import { View, Text } from 'react-native';
import ButtonSmall from './ButtonSmall';

const Controller = ({ nextOnPress, backOnPress, question }) => {
    const {
        containerStyle,
        questionStyle,
        buttonStyle,
        noButtonStyle,
        yesButtonStyle,
        questionContainerStyle,
        buttonContainerStyle,
        buttonTextStyle,
    } = styles;

    return (
            <View style={containerStyle}>
                <View style={questionContainerStyle}>
                    <Text style={questionStyle}>
                        { question }
                    </Text>
                </View>
                <View style={buttonContainerStyle}>
                    <ButtonSmall 
                        title='NO'
                        onPress={backOnPress}
                        style={[buttonStyle, noButtonStyle]}
                        fontStyle={buttonTextStyle}
                    />
                    <ButtonSmall 
                        title='YES'
                        onPress={nextOnPress}
                        style={[buttonStyle, yesButtonStyle]}
                        fontStyle={buttonTextStyle}
                    />
                </View>                
            </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    questionStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'quicksand'
        
    },
    buttonStyle: {
        width: 100,
    },
    noButtonStyle: {
        borderColor: '#E05858',
        backgroundColor: '#E05858'
    },
    yesButtonStyle: {
        borderColor: '#5F968E',
        backgroundColor: '#5F968E'
    },
    buttonContainerStyle: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    questionContainerStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'robotoslab',
        fontSize: 30
    }
};

export default Controller;
