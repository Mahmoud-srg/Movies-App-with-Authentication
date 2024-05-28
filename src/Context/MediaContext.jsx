import { createContext,useState, useEffect } from "react";
import axios from "axios";

export let MediaContext = createContext(null);

export default function MediaContextProvider(props) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    

  async function getTrendingMedia(mediaType, callback) {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?language=en-US&api_key=f287b6f2635d87f00f4ef2a3261cf90d`
      );
      callback(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrendingMedia("movie", setTrendingMovies);
    getTrendingMedia("tv", setTrendingTv);
    getTrendingMedia("person", setTrendingPeople);
  }, []);


    return <MediaContext.Provider value={{trendingMovies, trendingTv, trendingPeople}}>
        {props.children}
    </MediaContext.Provider>
}