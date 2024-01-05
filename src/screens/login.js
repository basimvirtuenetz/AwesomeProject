import React from 'react';
import { Bodytxt, Btn, Input, Title, Wrapper } from '../components/styledComp';
import { Colors } from '../colors/colors';
import { Alert } from 'react-native';

const Login = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [pass, setPass] = React.useState('');

    const handleLogin = async () => {
        if (!name || !pass) {
            Alert.alert('Fields Emplty');
        } else {
            navigation.navigate('Data', { name });
        }
    };
    const handleGuest = () => {
        navigation.navigate('Data', { name });
    };

    return (
        <Wrapper>
            <Title>Create New Account!</Title>
            <Input
                placeholder="Enter your Name"
                placeholderTextColor={Colors.white}
                keyboardType="default"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder="Enter Password"
                placeholderTextColor={Colors.white}
                keyboardType="visible-password"
                value={pass}
                onChangeText={text => setPass(text)}
            />
            <Btn onPress={() => handleLogin()}>
                <Bodytxt>Login</Bodytxt>
            </Btn>
            <Btn onPress={() => handleGuest()}>
                <Bodytxt>Guest</Bodytxt>
            </Btn>
        </Wrapper>
    );
};

export default Login;
