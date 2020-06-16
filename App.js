import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Feed from './feed';
import Detail from './detail';

import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';
import Screen3 from './screens/drawer/screen3';

import Tab1 from './screens/tabs/tab1';
import Tab2 from './screens/tabs/tab2';
import Tab3 from './screens/tabs/tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();;

function createHomeStack ( {navigation} ) {
  return ( 
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={Feed} options={{ title: "My Feed", headerStyle: {backgroundColor: "black"}, headerTintColor: "white" } } />
    <Stack.Screen name="Detail" component={Detail} options={{ title: "Detail Screen", headerStyle: {backgroundColor: 'blue'}, headerTintColor: 'white'}} />
    <Stack.Screen name="BottomTabs" children={createBottomTabs} />
    <Stack.Screen name="TopTabs" children={createTopTabs} />
  </Stack.Navigator>
  );
}

function createTopTabs ( props ) {
  console.log(props);
    return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{title: props.route.params.name}} />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  );
}

function createBottomTabs ( props ) {
  return (
  <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
    <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
    <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
  </MaterialBottomTabs.Navigator>
);
}

 export default function App() {
  return (     
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}  