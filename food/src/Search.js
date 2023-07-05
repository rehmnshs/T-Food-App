import React, {  useState } from "react";
import { View,Text,StyleSheet,ScrollView} from "react-native";
import Searchbar from "./Searchbar";
import ResultList from "./ResultsList";
import UseParts from "./UseParts";

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
   const [searchApi,results] = UseParts();
  
    const filterR= (price) =>{
    return results.filter(result =>{
        return result.price === price;
    });
}
    


      
    return <View>
    <Searchbar term={term} onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
    />
        
<ScrollView>
        <ResultList results ={filterR('$')}title ="Cost Effective" />
        <ResultList results ={filterR('$$')}title="Bit pricer for em rich brats"/>
        <ResultList results ={filterR('$$$')}title="Need big money for these" />
        <ResultList results ={filterR('$$$$')}title="Least Cost Effective" />
      
        <Text style={styles.p}>Made with Hunger</Text>
      
       
        
</ScrollView>
    
    
    </View>
};


const styles =StyleSheet.create({
    p:{alignSelf:"center",fontWeight:"bold"}});
export default SearchScreen;