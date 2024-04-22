import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyHelpScreen from './MyHelpScreen'; // Your login screen
import Dashboard from './dashboard'; // Your dashboard screen
import profile from './profile'; 
import Course from './Course';
import Sandbox from './Sandbox';
import Catalyst from './Catalyst';
import Canvas from './Canvas';
import Map from './Map';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyHelp">
        <Stack.Screen name="MyHelpScreen" component={MyHelpScreen} options={{ title: 'MyHelpScreen' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Canvas" component={Canvas} options={{ title: 'Canvas' }} />
        <Stack.Screen name="Catalyst" component={Catalyst} options={{ title: 'Catalyst' }} />
        <Stack.Screen name="Course" component={Course} options={{ title: 'Course' }} />
        <Stack.Screen name="Sandbox" component={Sandbox} options={{ title: 'Sandbox' }} />
        <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }} />
        <Stack.Screen name="profile" component={profile} options={{ title: 'Profile' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
