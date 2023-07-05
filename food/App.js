import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Search";
import Resultsshow from "./src/secondS";
const navigator = createStackNavigator({
search:SearchScreen,
resultshow:Resultsshow
},{
  initialRouteName: 'search',
  defaultNavigationOptions:{
    title:'Food App'
  }
  
});
export default createAppContainer(navigator);