import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import LoginStack from './LoginNavigation';
import {NavigationContainer} from '@react-navigation/native';

const ApplicationNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <LoginStack />
    </View>
  );
};

export default ApplicationNavigator;
