import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="mb-3">Quick points</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/movie">Movies</Link>
                </li>
                <li className="mb-2">
                  <Link to="/tv">Tv shows</Link>
                </li>
                <li className="mb-2">
                  <Link to="/people">People</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="mb-3">Get in touch</h3>
              <div className="social">
                <ul className="list-unstyled">
                  <li className="cursor-pointer">
                    <i className="me-3 mb-2 fab fa-facebook"></i>max_movies
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3 mb-2 fab fa-twitter"></i>max_movies
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3 mb-2 fab fa-spotify"></i>max_movies
                  </li>
                  <li className="cursor-pointer">
                    <i className="me-3 mb-2 fab fa-youtube"></i>max_movies
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <h3>&copy; mahmooud_srg at route 2024</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
