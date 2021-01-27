import React, { Component,useState } from 'react';
import { DISHES } from "./dishes";
import { ListItem } from "react-native-elements";
import { FlatList,Image ,View} from "react-native";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';



function Menu(props) {
    const [dishes,setDishes] = useState(DISHES);
        const renderItem = ({item, index}) => {

            return (
                <ListItem  onPress={() => {
                    props.navigation.navigate('DishDetail', {
                      dishId: item.id,
                    });
                  }} key={index} bottomDivider>
                <Image source={require('./images/uthappizza.png')} />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}

export default Menu;