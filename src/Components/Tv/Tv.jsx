import { useContext } from "react"
import MediaItem from "../MediaItem/MediaItem"
import { MediaContext } from './../../Context/MediaContext'; 
import { Helmet } from "react-helmet";

const Tv = () => {
  let {trendingTv} = useContext(MediaContext)

  return <>
  <div className="row py-5 gy-4">
        <div className="">
          <div className="text-center m-auto bg-anger">
            <div className="brdr w-25 mb-3 m-auto"></div>
            <h2 className="h4 my-4">Trending Tv <br /> to see now</h2>
            <p className="lead gray mb-3">Most trending Tv by week</p>
            <div className="brdr w-50 mt-3 m-auto"></div>
          </div>
        </div>

        {trendingTv.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tv shows</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  </>
}

export default Tv