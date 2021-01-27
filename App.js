import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Home from "./components/HomeComponent";
import Menu  from "./components/MenuComponent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DishDetail from "./components/DishdetailsComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import { Icon } from "react-native-elements";
import Sidebar from './components/CustomDrawer';
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import  Main  from "./components/MainComponent";



 function App(props) {
 

  
  return (
      <Main /> 
  );
}
export default App;

