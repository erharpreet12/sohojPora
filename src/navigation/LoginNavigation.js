import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../views/beforeLogin/Login';
import Otp from '../views/beforeLogin/Otp';
const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
