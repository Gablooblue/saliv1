import React from 'react';
import { View, Image } from 'react-native';
import { DEFAULT_BACKGROUND } from '../img';

const Background = () => {
    const { backgroundStyle } = styles;

    return (
        <Image
		    style={ backgroundStyle }
		    source={ [ DEFAULT_BACKGROUND ] }
		  >
		</Image>
    );
};

const styles = {
    backgroundStyle: {
        backgroundColor: '#fff',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
    }
}

export default Background;
