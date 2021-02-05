
import React, { useState, useEffect, Profiler } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Image
} from 'react-native';
import { firebase } from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';
import { Container, Content, Form, Item, Input, Label, Header, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoogleLogin from './src/screens/loginwithgoogle';
import Loginwithphone from './src/screens/loginwithphone';
import 'react-native-gesture-handler';
import confirmcode from './src/screens/confirmmobilecode';
import Home from './src/screens/Home';
import RealtimeDB from './src/screens/RealtimeDB';
import Welcome from './src/screens/Welcome';
import Update from './src/screens/update';



const Stack = createStackNavigator();
const App = () => {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode={false}
          initialRouteName="Home"
        >
          <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
          <Stack.Screen name="Loginwithphone" component={Loginwithphone} />
          <Stack.Screen name ="confirmcode" component={confirmcode}/>
          <Stack.Screen name ="Home" component={Home}/>
          <Stack.Screen name ="RealtimeDB" component={RealtimeDB}/>
          <Stack.Screen name ="Welcome" component={Welcome}/>
          <Stack.Screen name ="Update" component={Update}/>

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}


export default App;
