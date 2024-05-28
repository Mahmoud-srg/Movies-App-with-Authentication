import { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { MediaContext } from "../../Context/MediaContext";
import { Helmet } from "react-helmet";

const Home = () => {
  let { trendingMovies, trendingTv, trendingPeople } = useContext(MediaContext);
  return (
    <>
      <div className="row py-5 gy-4">
        <div className="col-md-4">
          <div className="text-center text-md-start py-5">
            <div className="brdr w-25 mb-3 m-auto ms-md-0"></div>
            <h2 className="h4 my-4">
              Trending movies <br /> to watch now
            </h2>
            <p className="lead gray mb-3">Most watched movies by week</p>
            <div className="brdr w-50 mt-3 m-auto ms-md-0"></div>
          </div>
        </div>

        {trendingMovies.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="row py-5 gy-4">
        <div className="col-md-4">
          <div className="text-center text-md-start py-5">
            <div className="brdr w-25 mb-3 m-auto ms-md-0 "></div>
            <h2 className="h4 my-4">
              Trending Tv shows <br /> to watch now
            </h2>
            <p className="lead gray mb-3">Most watched tv shows by week</p>
            <div className="brdr w-50 mt-3 m-auto ms-md-0"></div>
          </div>
        </div>

        {trendingTv.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="row py-5 gy-4">
        <div className="col-md-4">
          <div className="text-center text-md-start py-5">
            <div className="brdr w-25 mb-3 m-auto ms-md-0"></div>
            <h2 className="h4 my-4">
              Trending People <br /> to see now
            </h2>
            <p className="lead gray mb-3">Most trending people by week</p>
            <div className="brdr w-50 mt-3 m-auto ms-md-0"></div>
          </div>
        </div>

        {trendingPeople.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </>
  );
};

export default Home;
