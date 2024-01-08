import React from 'react';
import { Input, Title, Btn, SubTitle } from '../components/styledComp';
import { Colors } from '../colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../../App';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Title>Create New Account!</Title>
            <Input
                placeholder='Enter your first-name'
                placeholderTextColor={Colors.white}
                enterKeyHint='next'
                cursorColor={Colors.white}
                value={username}
                onChangeText={setUsername} />
            <Input
                placeholder='Enter your last-name'
                placeholderTextColor={Colors.white}
                enterKeyHint='next'
                cursorColor={Colors.white} />
            <Input
                placeholder='Enter your phone-number'
                placeholderTextColor={Colors.white}
                keyboardType='number-pad'
                enterKeyHint='next'
                cursorColor={Colors.white} />
            <Input
                placeholder='Enter your email'
                placeholderTextColor={Colors.white}
                enterKeyHint='next'
                keyboardType='email-address'
                cursorColor={Colors.white} />
            <Input
                placeholder='Enter your password'
                placeholderTextColor={Colors.white}
                enterKeyHint='next'
                keyboardType='visible-password'
                cursorColor={Colors.white}
                value={password}
                onChangeText={setPassword} />
            <Input
                placeholder='Confirm your password'
                placeholderTextColor={Colors.white}
                enterKeyHint='go'
                keyboardType='visible-password'
                cursorColor={Colors.white} />
            <Btn onPress={() => signIn({ username, password })}>
                <SubTitle>Done</SubTitle>
            </Btn>
        </KeyboardAwareScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
})
