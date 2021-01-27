import React, { Component,useState } from 'react';
import { DISHES } from "./dishes";
import { Text,View,FlatList} from "react-native";
import { Card,Icon } from "react-native-elements";
import { COMMENTS } from "./comments";
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';




function RenderComments(props){
    const comments = props.comments;
    const renderComments = ({item,index})=>{
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        )
    }
    return(
        <View>
        <Card>    
          <FlatList
            data={comments}
            renderItem={renderComments}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
        
        </View>

       
    )
}

function RenderDish(props)
{
    const dish = props.dish;
    
    if (dish != null) {
        return(
            <View>
            <Card>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('./images/uthappizza.png')}>
               
            </Card.Image>
            <Text style={{marginBottom: 10}}>
                    {dish.description}
                </Text>
                <Icon 
                    raised
                    reverse
                    name={props.favorite ? 'heart': 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={()=> props.favorite ? console.log('Already Favorite') : props.onPress() }
                    />
            </Card>
            </View>

            
        );
    }
    else {
        return(<View><Text>Nothing</Text></View>);
    }
}

function DishDetail(props) {
        const [dishes,setDishes] =useState(DISHES);
        const {dishId} = props.route.params;
        const [comments,setComments] = useState(COMMENTS);
        const [favorites,setFavorites] = useState([]);
        function markFavorite(dishId){
            setFavorites(oldarray => [...oldarray,dishId])
        }
        return(

                <ScrollView>
                <RenderDish dish={dishes[+dishId]} 
                favorite={favorites.some(el => el === dishId)} 
                onPress = {()=> {markFavorite(dishId)}}/>
                <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />            
                </ScrollView>
        )  
}

export default DishDetail;