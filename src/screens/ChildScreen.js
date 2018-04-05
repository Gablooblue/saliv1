import React, { Component } from 'react'; import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'; import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';

class ChildScreen extends Component {
    noClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        key: null,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'Drowning' })
	        ]
	    })	
        this.props.navigation.dispatch(resetAction)
    }

    yesClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CPRSurvey'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    
    render() {
        const { childQuestion } = this.props.text;
        const { containerStyle, controllerStyle } = styles

        return (
            <View style={ containerStyle }>
		        <Background
		            source={ require('../img/asset3.png') }
		        />
                <View style={ controllerStyle }>
                    <Controller 
                        backOnPress={ this.noClick }  
                        nextOnPress={ this.yesClick } 
                        question={ childQuestion }
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    controllerStyle: {
        flex: 1
    }
}

const mapStateToProps = (state) => {
    console.log(state.subtitles);

    return {
	    text: state.text,
	    subtitles: state.subtitles,
    }
}

export default connect( mapStateToProps )( ChildScreen );
