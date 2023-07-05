import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";
import Thething from "./thething";

const ResultList =({title,results,navigation})=>{
   if(!results.length){
    return null;
   }
    return <View style={style.container}><Text style = {style.title}>{title}</Text>
    <FlatList 
    showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(result)=>{
            result.id
        }}
        renderItem={({item}) =>{
return(<TouchableOpacity onPress={() =>navigation.navigate('resultshow',{id:item.id})}><Thething result ={item} /></TouchableOpacity>);
        }}


    />
    

    </View>
}

const style = StyleSheet.create({
    title:
    {
fontSize: 18,
fontWeight: 'bold',
marginLeft:15,

    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultList);