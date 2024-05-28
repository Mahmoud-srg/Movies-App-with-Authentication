import { Link } from "react-router-dom"

const MediaItem = ({item}) => {

  return <>
  <div className="col-md-2">
    <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
    <div className="movie position-relative">
        {item.poster_path?<img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className="w-100 mb-2" alt="item image" />:<img src={`https://image.tmdb.org/t/p/w500`+item.profile_path} className="w-100 mb-2" alt="item image" />}
        
        <h3 className="h6 m y-2">{item.title}{item.name}</h3>
        {item.vote_average?<div className="vote p-2 p-md-2">{item.vote_average?.toFixed(1)}</div>:''}
        
    </div>
    </Link>
  </div>
  
  
  
  
  </>
}

export default MediaItem