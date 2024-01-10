import React from 'react';
import {
    Input,
    Title,
    Btn,
    Wrapper,
    Header,
    BtnTxt,
} from '../components/styledComp';
import { Colors } from '../colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

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
                    placeholder="Username"
                    placeholderTextColor={Colors.Dblue}
                    enterKeyHint="next"
                    cursorColor={Colors.Dblue}
                    value={username}
                    onChangeText={setUsername}
                />

                <Input
                    placeholder="Password"
                    placeholderTextColor={Colors.Dblue}
                    enterKeyHint="next"
                    keyboardType="visible-password"
                    cursorColor={Colors.white}
                    value={password}
                    onChangeText={setPassword}
                />

                <Btn onPress={() => signIn({ username, password })}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[Colors.Lblue, Colors.Dblue]}
                        style={{
                            width: 180,
                            height: 60,
                            borderRadius: 40,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <BtnTxt>Done</BtnTxt>
                    </LinearGradient>
                </Btn>
            </Wrapper>
        </KeyboardAwareScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
