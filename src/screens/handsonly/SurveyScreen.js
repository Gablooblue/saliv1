import React, { Component } from 'react';
// import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
// import Background from '../components/Background';
// import Controller from '../components/Controller';
// import Overlay from '../components/Overlay';
// import Subtitle from '../components/Subtitle';
// import Video from '../components/Video';
import VideoScreen from '../../components/VideoScreen';
// import { loadAudio} from '../helpers/audio';
// import { Audio } from 'expo';
import { showSubtitles } from '../../actions';
import { SURVEY_AUDIO, SURVEY_VID } from '../../data';

class SurveyScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Call',
                    params: { isNotSafe: true }
                })
            ]
        });	
        this.props.navigation.dispatch(resetAction);
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Check'
                })
            ] 
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    // playAudio = async () => {
	//     this.audio = new Expo.Audio.Sound();
	//     await this.audio.loadAsync(require("../data/audio/survey.m4a"));
	//     await this.audio.playAsync();
	//     if(this.audio != null) {
	//         this.audio.playAsync();
    //     } else {
	//         console.log("Error playing audio");
	//     }
    // }
    
    // state = {
    //     subtitles: null,
    //     isLoaded: false
    // }

    // componentDidMount() {
	//     this.playAudio()
    // }

    // componentWillMount() {
	//     this._getSubtitles();
    // }

    // _getSubtitles = async () => {
	//     await this.props.showSubtitles('Survey', 'English');
	//     this.setState({
	//         isLoaded: true,
	//     })
    // }

    // componentWillUnmount() {
	//     clearInterval(this.interval);
	//     this.audio.unloadAsync();
    // } 

    render() {
        const { survey } = this.props.text;
        // const { containerStyle, controllerStyle, overlayStyle, subtitleStyle, videoStyle } = styles;

        return (
            // <View style={ containerStyle }>
		    //     <Background
		    //         source={ require('../img/asset3.png') }
		    //     />
            //     <View style={overlayStyle} pointerEvents='none'>
		    //         { this.state.isLoaded &&
		    //             <Overlay title='Survey the Area' subtitles = {this.props.subtitles.survey.overlay} />
		    //         }
            //     </View>
            //     <View style={ videoStyle }>
            //         <Video 
            //             source={ SURVEY_VID }
            //         />
            //         <View style={ subtitleStyle }>
            //             { this.state.isLoaded &&
            //                 <Subtitle subtitles= {this.props.subtitles.survey.repeat} />
            //             }
            //         </View>
            //     </View>
		
            //     <View style={ controllerStyle }>
            //         <Controller 
            //             backOnPress={ this.backClick }  
            //             nextOnPress={ this.nextClick } 
            //             question={ survey }
            //         />
            //     </View>
            // </View>
            <VideoScreen 
                text={survey}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={SURVEY_VID}
                audio={SURVEY_AUDIO}
                title="Survey the Area"
            />
        );
    }
}

// const styles = {
//     containerStyle: {
//         flex: 1,
//         backgroundColor: 'white',
//         marginTop: (Platform.OS === 'ios') ? 20 : 0
//     },
//     controllerStyle: {
//         flex: 30
//     },
//     overlayStyle: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 1
//     },
//     subtitleStyle: {
//         height: '15%',
//     },
//     videoStyle: {
//         flex: 70, 
//         paddingRight: 10, 
//         paddingLeft:10,
//         justifyContent: 'flex-end'
//     }
// }

const mapStateToProps = (state) => ({
    // console.log(state.subtitles);
    text: state.text,
    // subtitles: state.subtitles,
});

export default connect(mapStateToProps, { showSubtitles })(SurveyScreen);
