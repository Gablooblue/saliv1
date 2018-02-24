import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import Input from "../../components/Input";
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';
import { signUp, doPasswordsMatch } from "../../helpers/firebase";

class SignupScreen extends Component {
    backClick = () => {
	this.props.navigation.navigate("Home");
    }

    submit = async () => {
	this.setState({ loading: true });
	if(this.state.password ===this.state.confirmPassword)
	{
	    let attempt = await signUp(this.state.email, this.state.password);
	    if(attempt == true)
	    {
		this.setState({ loading: false })
		Alert.alert(
		    "Successfully signed up",
		    "You will now be redirected",
		    [
			{text: "Ok", style: "default"}
		    ]
		)

	    }
	    else
	    {
		this.setState({ loading: false })
		Alert.alert(
		    "Error signing up" ,
		    attempt,
		    [
			{text: "Ok", style: "default"}
		    ]
		)
	    }
	}
	else if(this.state.password != this.state.confirmPassword)
	{
		this.setState({ loading: false })
		Alert.alert(
		    "Error signing up" ,
		    "Passwords don't match",
		    [
			{text: "Ok", style: "default"}
		    ]
		)
	}
    }

    constructor(props)
    {
	super(props)
	this.state = {
	    email: null,
	    password: null,
	    confirmPassword: null,
	    loading: false,
	}
    }

    render() {
	const { login } = this.props.text;
	return(
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
			<Input style = { styles.input}
			    placeholder = "Confirm Password"
			    autoCapitalize ={"none"}
			    secureTextEntry = {true }
			    onChangeText = { (confirmPassword) => this.setState({ confirmPassword}) }
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
	);
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
	email: state.auth,
	text: state,
    }
}

export default connect(mapStateToProps)(SignupScreen);
