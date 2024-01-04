import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Mainwrapp from './src/components/mainwrapp';
import Headtxt from './src/components/headtxt';
import Items from './src/components/items';
import Btn from './src/components/btn';
import Input from './src/components/input';

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

const App = () => {
  const [namw, useName] = React.useState("");
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
    <Mainwrapp>
      <Headtxt message={"Header"} />
      <Items>
        <Headtxt message={prevCount} />
        <Headtxt message={trend} />
      </Items>
      <Input
        placeholder={"Password"}
        type={"visible-password"}
        label={passwordHintId}
      />
      <Text id={passwordHintId}>Please Enter 6 digit password</Text>
      <Btn>
        <TouchableOpacity onPress={handleCount}>
          <Text>Reset counter</Text>
        </TouchableOpacity>
      </Btn>
      <Btn>
        <TouchableOpacity
          onPress={() => {
            dispatch({ type: 'increase' });
          }}>
          <Text>Increment Age</Text>
        </TouchableOpacity>
      </Btn>
      <Headtxt message={state.age} />
    </Mainwrapp>
  );
};

export default App;

const styles = StyleSheet.create({});
