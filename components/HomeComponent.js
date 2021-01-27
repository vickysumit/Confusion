import React,{useState} from 'react';
import {View,Text,ScrollView,StyleSheet,Button} from 'react-native';
import { LEADERS } from "./leaders";
import { COMMENTS } from "./comments";
import { DISHES } from "./dishes";
import { PROMOTIONS } from './promotions';
import { Card,Icon } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';



function RenderItem({item})
{
    if(item!=null){
        return(
            <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('./images/uthappizza.png')}>
               
            </Card.Image>
            <Text style={{marginBottom: 10}}>
                    {item.description}
                </Text>
            </Card>  
        )
    }
    else{
        return(<View></View>)
    }

}

function Home(props){
    const [leaders,setLeaders] =useState(LEADERS);
    const [promotions,setPromotions] =useState(PROMOTIONS);
    const [dishes,setDishes] =useState(DISHES);
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 24,
          backgroundColor: "#eaeaea"
        },
        header: {
          marginTop:50,
          marginLeft:10
         
        }
      });
    return(
        <View>
          
            
            <ScrollView>
            <RenderItem item={dishes.filter((dish)=>dish.featured)[0]} />
            <RenderItem item={leaders.filter((lead)=>lead.featured)[0]} />
            <RenderItem item={promotions.filter((promo)=>promo.featured)[0]} />
            </ScrollView>
        </View>

    )
   

}

export default Home;