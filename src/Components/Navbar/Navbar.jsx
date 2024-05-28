import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  let navigate = useNavigate();
  let { setUserData } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/login");
  }

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* <nav className="d-flex justify-content-between p-3 bg-danger">
    <div className="left-nav d-flex ">
      <Link to='/'><h1 className="h5 pe-4 m-0">MAX</h1></Link>
      {localStorage.getItem("userData")?<ul className="nav-response list-unstyled d-flex m-0 d-none d-md-flex">
        <li className="px-2"><Link to='/'>Home</Link></li>
        <li className="px-2"><Link to='movie'>Movie</Link></li>
        <li className="px-2"><Link to='tv'>Tv Shows</Link></li>
        <li className="px-2"><Link to='people'>People</Link></li>
        <li className="px-2"><Link to='about'>About</Link></li>
      </ul>:''}
    </div>
    <div className="right-nav d-none d-md-flex">
      <div className="social">
        <i className="mx-1 fab fa-facebook"></i>
        <i className="mx-1 fab fa-twitter"></i>
        <i className="mx-1 fab fa-spotify"></i>
        <i className="mx-1 fab fa-youtube"></i>
      </div>
      <ul className="list-unstyled d-flex m-0">
      {localStorage.getItem("userData")? <>
        <li className="px-2"><Link to='profile'>Profile</Link></li>
        <li className="px-2"><span className="cursor-pointer" onClick={logout}>Logout</span></li>
        </>:<>
        <li className="px-2"><Link to='login'>Login</Link></li>
        <li className="px-2"><Link to='register'>Register</Link></li>
        </>}
      </ul>
    </div>
    <i className="fa-solid fa-bars fs-3 d-md-none"></i>
  </nav> */}

      <nav className="navbar navbar-expand-md p-2 text-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className="h5 m-0 text-white">MAX</h1>
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <div className="navbar-nav me-auto">
              {localStorage.getItem("userData") && (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="movie">
                      Movie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="tv">
                      Tv Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="people">
                      People
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="d-md-flex align-items-center">
              <div className="social me-3">
                <i className="mx-1 fab fa-facebook"></i>
                <i className="mx-1 fab fa-twitter"></i>
                <i className="mx-1 fab fa-spotify"></i>
                <i className="mx-1 fab fa-youtube"></i>
              </div>
              <ul className="navbar-nav">
                {localStorage.getItem("userData") ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="profile">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <span
                        className="nav-link cursor-pointer text-white"
                        onClick={logout}
                      >
                        Logout
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
