import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Books from '../views/afterLogin/Books';
import Profile from '../views/afterLogin/Profile';
import Deshboard from '../views/afterLogin/Dashboard';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Books"
          component={Books}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Deshboard" component={Deshboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
