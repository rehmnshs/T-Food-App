import React from "react";

import { View,Text,StyleSheet,Image } from "react-native";

const Thething =({result})=>{
    return <View style={styles.container}>
    <Image  style={styles.t} source={{uri: result.image_url}}/>
    
        <Text style={styles.name}>
        {result.name}
        </Text>
        <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
    </View>
    
};

const styles =StyleSheet.create({
    container:{
margin:10
    },

    t:{
        width:250,
        borderRadius:4,
        height:120
        
    },
    name:{
        fontWeight:'bold',
        fontSize:14
    }
});

export default Thething;