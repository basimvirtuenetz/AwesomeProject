import React from 'react';
import {
    Wrapper,
    Title,
    Btn,
    Input,
    Items,
    Bodytxt,
} from '../components/styledComp';
import { Colors } from '../colors/colors';

const reducer = (state, action) => {
    try {
        if (action.type === 'increase') {
            return {
                age: state.age + 1,
            };
        }
    } catch (error) {
        console.log(error);
    }
};

const Main = () => {
    const [count, setCount] = React.useState(0);
    const [prevCount, setPrevCount] = React.useState(count);
    const [trend, setTrend] = React.useState(null);
    const passwordHintId = React.useId();
    const [state, dispatch] = React.useReducer(reducer, { age: 23 });

    if (prevCount !== count) {
        setPrevCount(count);
        setTrend(count > prevCount ? 'Increasing' : 'Reseted');
    }

    const handleCount = () => {
        setCount(0);
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [count]);

    return (
        <Wrapper>
            <Title>Hello World, this is my first styled component!</Title>

            <Items>
                <Title>{prevCount}</Title>
                <Title>{trend}</Title>
            </Items>
            <Input
                placeholder="Enter Password"
                placeholderTextColor={Colors.white}
                secureTextEntry
                label={passwordHintId}
            />
            <Bodytxt id={passwordHintId}>Please Enter 6 digit password</Bodytxt>
            <Btn onPress={handleCount}>
                <Bodytxt>Reset counter</Bodytxt>
            </Btn>
            <Btn
                onPress={() => {
                    dispatch({ type: 'increase' });
                }}>
                <Bodytxt>Increment Age</Bodytxt>
            </Btn>
            <Title>{state.age}</Title>
        </Wrapper>
    );
};

export default Main;
