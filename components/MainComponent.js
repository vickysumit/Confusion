import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Home from "./HomeComponent";
import Menu  from "./MenuComponent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DishDetail from "./DishdetailsComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { Icon } from "react-native-elements";
import Sidebar from './CustomDrawer';
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import {  fetchDishes,fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { ConfigureStore } from "../redux/ConfigureStore";

const MenuNavigator = ({navigation}) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator initialRouteName="Menu" screenOptions={{
      title: 'Menu',
      headerLeft: () => (
        <Icon name="menu" size={24} 
          color= 'white'
          onPress={ () => navigation.toggleDrawer() } />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Menu" component={Menu}/>
    <Stack.Screen name="DishDetail" component={DishDetail} />
    </Stack.Navigator>
  )
}
const ContactNavigator = ({navigation})=>{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
          <Stack.Screen name="Contact" component={Contact} options={{
      title: 'Contact ',
      headerLeft: () => (
        <Icon name="menu" size={24} 
          color= 'white'
          onPress={ () => navigation.toggleDrawer() } />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}/>
    </Stack.Navigator>
  )
}

const AboutNavigator = ({navigation})=>{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
          <Stack.Screen name="About" component={About} options={{
      title: 'About us',
      headerLeft: () => (
        <Icon name="menu" size={24} 
          color= 'white'
          onPress={ () => navigation.toggleDrawer() } />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}/>
    </Stack.Navigator>
  )
}

const HomeNavigator = ({navigation})=>{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator >
          <Stack.Screen name="Home" component={Home}  options={{
      title: 'Home',
      headerLeft: () => (
        <Icon name="menu" size={24} 
          color= 'white'
          onPress={ () => navigation.toggleDrawer() } />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    </Stack.Navigator>
  )
}

 function Main(props) {
  const Drawer = createDrawerNavigator();
  

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=><Sidebar {...props} />} >
          <Drawer.Screen name="Home" component={HomeNavigator} options={{
            drawerIcon:({focused,color,size})=>(<Icon name="home" style={{fontSize:size,color:'color'}} />)
          }}/>
          <Drawer.Screen name="Menu" component={MenuNavigator} />
          <Drawer.Screen name="About" component={AboutNavigator} />
          <Drawer.Screen name="Contact" component={ContactNavigator}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Main;

