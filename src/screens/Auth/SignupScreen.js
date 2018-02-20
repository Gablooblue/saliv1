import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Input from "../../components/Input";
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';

class SignupScreen extends Component {
    backClick = () => {
	this.props.navigation.navigate("Home");
    }

    submit = () => {

    }

    constructor(props)
    {
	super(props)
	this.state = {
	    email: null,
	    password: null,
	    confirmPassword: null
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
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Email"
			    value = {this.props.email}
			    onChangeText = { (email) => this.setState({ email}) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Password"
			    onChangeText = { (password) => this.setState({ password}) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Confirm Password"
			    onChangeText = { (confirmPasssword) => this.setState({ confirmPassword }) }
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
