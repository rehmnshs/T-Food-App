import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import yelp from "./yelp";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { withDecay } from "react-native-reanimated";


const Resultsshow =({navigation}) =>{
    const [result,setResult] =useState(null);
    const id =navigation.getParam('id');
   
   const getResult =async(id)=>{
const resp =  await yelp.get(`/${id}`);
setResult(resp.data);};
useEffect( () =>{
    getResult(id);
        },[]);

        if(!result){
            return null;
        }
        

        
    return (<View>
    
    <Text  style ={style.p}>Restaurant's name:</Text>
    <Text style ={style.e}>{result.name}</Text>
   
    <FlatList  data={result.photos} keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style ={style.t} source={{uri:item}}/>
        }}
    />


    </View>)
}

const style = StyleSheet.create({
    t:{height:200, width:400,
        alignSelf:"center",
        margin:5
},
e:{alignSelf:"center",
margin:15,
fontWeight:"bold"},
p:{
    marginTop:10,
    fontWeight:"bold"
    ,alignSelf:"center"
},

})

export default Resultsshow;