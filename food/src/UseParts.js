import { useEffect,useState } from "react";
import yelp from "./yelp";



export default () =>{
    const [results, setResults] = useState([]);
    
     const searchApi = async (searchitem) => {
        const response = await yelp.get("/search", {
            params: {
                limit: 50,
                term:searchitem,
                location: "sweden"
            }
        });
        setResults(response.data.businesses);
    };
    
   
    useEffect( () =>{
searchApi('pasta');
    },[]);
return [searchApi,results]
}