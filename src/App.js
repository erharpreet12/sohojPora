import * as React from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ApplicationNavigator from './navigation/Application';
function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ApplicationNavigator />
    </GestureHandlerRootView>
  );
}
export default App;
