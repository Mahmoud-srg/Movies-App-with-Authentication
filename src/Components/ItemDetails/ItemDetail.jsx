import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom"


const ItemDetail = () => {
    let {id, media_type} = useParams();
    const [itemDetails, setItemDetails] = useState([])
    
    async function getItemDetails() {
        try {
            let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?language=en-US&api_key=f287b6f2635d87f00f4ef2a3261cf90d`);
            setItemDetails(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      getItemDetails()
    
      
    }, [])
    
  return <>
  <div className="row py-5">
    <div className="col-md-3">
        {itemDetails.poster_path?<img className="w-100" src={`https://image.tmdb.org/t/p/w500`+itemDetails.poster_path} alt="" />:<img className="w-100" src={`https://image.tmdb.org/t/p/w500`+itemDetails.profile_path} alt="" />}
        
        
    </div>
    <div className="col-md-9 ps-md-4">
        <h2 className="h3 mb-3">{itemDetails?.title}{itemDetails?.name}</h2>
        {itemDetails?.known_for_department?<p className="lead mt-4"><span className="gray">Department :</span> {itemDetails?.known_for_department}</p>:''}

        {itemDetails?.tagline?<p className="lead gray mb-5">{itemDetails?.tagline}</p>:""}
        {itemDetails?.vote_average?<p className="lead mb-4 fs-4">Vote average : {itemDetails?.vote_average?.toFixed(1)}</p>:''}
        {itemDetails?.vote_count?<p className="lead mb-4 fs-4">Vote count : {itemDetails?.vote_count?.toFixed(1)}</p>:''}
        {itemDetails.birthday?<p className="lead  mb-4"><span className="gray">Birthday : </span>{itemDetails?.birthday}</p>:""}
        {itemDetails.place_of_birth?<p className="lead  mb-4"><span className="gray">Place of birth : </span>{itemDetails?.place_of_birth}</p>:""}
        <p className="lead mb-4 fs-4">Popularity : {itemDetails?.popularity}</p>
        {itemDetails.biography?<><p className="lead mb-2 fs-4">Overview : </p> <p className="lead gray mb-4 fs-4">{itemDetails?.biography}</p></>:''}
        {itemDetails?.release_date?<p className="lead mb-4 fs-4">Release date : {itemDetails?.release_date}</p>:''}
        <p className="lead mb-4 fs-4 gray">{itemDetails?.overview}</p>


    </div>
  </div>
  <Helmet>
                <meta charSet="utf-8" />
                <title>{itemDetails?.title?itemDetails?.title:itemDetails?.name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  </>
}

export default ItemDetail