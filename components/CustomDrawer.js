import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image,View,Text,StyleSheet,SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
function Sidebar({...props}){

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        drawerHeader: {
          backgroundColor: '#512DA8',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'row'
        },
        drawerHeaderText: {
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold'
        },
        drawerImage: {
          margin: 10,
          width: 80,
          height: 60
        }
      });
    return(
        <DrawerContentScrollView {...props} >
            <SafeAreaView>
         <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
           <DrawerItemList {...props} />
            <DrawerItem label="Rate Us" icon= {({color,size})=>
                <Icon name="star" style={{fontSize:size,color:color}} />} 
                onPress={()=>props.navigation.navigate('Home')} />
        </SafeAreaView>
         </DrawerContentScrollView>
    )

}

export default Sidebar;