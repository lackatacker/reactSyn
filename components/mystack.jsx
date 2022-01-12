import * as React from 'react';
import LogIn from './login';
import SignUp from './signUp';
import Accueil from './accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Factures from './factures';
import Charges from './Charges';
import Profile from './Profile';
import Recover from './recoverPassword';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LogIn}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Factures" component={Factures} />
        <Stack.Screen name="Charges" component={Charges} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Recover" component={Recover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack