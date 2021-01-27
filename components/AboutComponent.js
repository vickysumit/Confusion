import React,{useState} from 'react';
import { View,FlatList ,Text,ScrollView,Image,SafeAreaView } from "react-native";
import { Card,ListItem } from "react-native-elements";
import {LEADERS} from './leaders';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";



function About(props){
    const [leaders,setLeaders] = useState(LEADERS);
    const renderItem = ({item,index})=>{
        return(
            <ListItem key={index} bottomDivider>
            <Image source={require('./images/uthappizza.png')} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
              
            </ListItem.Content>
          </ListItem>
        )
    }
    return(
        <ScrollView>

            <View>
            <Card>
            <Card.Title>Our History</Card.Title>
            <Card.Divider/>               
            <Text style={{marginBottom: 10}}>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Text>
            </Card>
               

            
              
                <FlatList
                data={leaders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
             
                   
                 </View>
                 </ScrollView>

  

    )
}

export default About;