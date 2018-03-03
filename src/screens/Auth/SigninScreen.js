import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import Input from "../../components/Input";
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';
import {signIn} from '../../helpers/firebase';

class SigninScreen extends Component {
    backClick = () => {
	this.props.navigation.navigate("Home");
    }

    constructor(props) 
    {
	super(props)
	this.state - {
	    email: null,
	    password: null, 
	    loading:false,
	}
    }

    render() {
	return (
	    <View style = {styles.container}>
		<Image
		    style={{
		      backgroundColor: '#fff',
		      flex: 1,
		      resizeMode: 'cover',
		      position: 'absolute',
		      width: '100%',
		      height: '100%',
		      justifyContent: 'center',
		    }}
		    source={ require('../../img/asset8.png') }
		/>
                <Image
                    style={ styles.logo}
                    source={ LOGO }
                />
		<View>
		    <ActivityIndicator size="small" color="#00ff00" animating = {this.state.loading} />
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Email"
			    onChangeText = { (email) => this.setState({ email}) }
			    keyboardType = "email-address"
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Password"
			    autoCapitalize ={"none"}
			    secureTextEntry = {true }
			    
			    onChangeText = { (password) => this.setState({ password}) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Button 
			    title = "Submit"
			    onPress = { this.submit }
			/>
		    </View>
		</View>
	    </View>
	)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    logo: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30
    },
    header: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24,
        marginBottom: 20
    },
    input: {
        paddingBottom: 10
    },
});

const mapStateToProps = (state) => {
    return {
	text: state,
    }
}

export default connect(mapStateToProps)(SigninScreen);