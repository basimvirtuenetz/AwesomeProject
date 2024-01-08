import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/screens/main";
import Login from "./src/screens/login";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/splash";

export const AuthContext = React.createContext();

const Stack = createNativeStackNavigator();
const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const Async = async () => {
      let userToken;
      try {
       userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {

      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    }
    Async();
  },[]);

  const authContext = React.useMemo(() => ({
    signIn : async (data) => {
      dispatch({type : 'SIGN_IN', token:'dummy-auth-token' })
    },
    signOut : () => {dispatch({type:'SIGN_OUT'})},
    signUp : async (data) => {
      dispatch({type : 'SIGN_UP', token:'dummy-auth-token'})
    }
  }));

  if(state.isLoading){
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {state.userToken == null? (
        <>
        <Stack.Screen name="Login" component={Login} />
        </>
        ):(
        <>
        <Stack.Screen name="Main" component={Main} />
        </>)}
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App