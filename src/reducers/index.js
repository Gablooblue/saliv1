import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TextReducer from './TextReducer';
import NavReducer from './NavReducer';
import HotlineReducer from './HotlineReducer';
import TutorialReducer from './TutorialReducer';
import SubtitleReducer from './SubtitleReducer';
import {firebaseStateReducer as firebase} from 'react-redux-firebase';

export default combineReducers({
    auth: AuthReducer,
    text: TextReducer,
    nav: NavReducer,
    tutorial: TutorialReducer,
    firebase,
    hotlines: HotlineReducer,
    subtitles: SubtitleReducer,
    user: null,
});
