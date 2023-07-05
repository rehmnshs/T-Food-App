import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";


const Searchbar= ({term,onTermChange,onTermSubmit}) =>{
    return <View style={styles.p}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={styles.c} placeholder="Search"
        value={term}
        onChangeText={newTerm =>onTermChange(newTerm)} 
            onEndEditing={()=>onTermSubmit()}
        />
    </View>
};

const styles =StyleSheet.create({
    p:{
    backgroundColor:'#F0EEEE',
    borderRadius:6,
    marginHorizontal:15,
    marginTop:5,
    flexDirection:"row",
    padding:10,
    marginBottom:5
    },
    c:{
        marginLeft:10,
        flex:1,
        
    }
});
export default Searchbar;