import React from 'react';
import { Input, Title, Btn, SubTitle, Wrapper, Header } from '../components/styledComp';
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
            <Wrapper>
                <Header>
                    <Title>Create New Account!</Title>
                </Header>
                <Input
                    placeholder='Username'
                    placeholderTextColor={Colors.Dblue}
                    enterKeyHint='next'
                    cursorColor={Colors.Dblue}
                    value={username}
                    onChangeText={setUsername} />

                <Input
                    placeholder='Password'
                    placeholderTextColor={Colors.Dblue}
                    enterKeyHint='next'
                    keyboardType='visible-password'
                    cursorColor={Colors.white}
                    value={password}
                    onChangeText={setPassword} />

                <Btn onPress={() => signIn({ username, password })}>
                    <SubTitle>Done</SubTitle>
                </Btn>
            </Wrapper>
        </KeyboardAwareScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})
