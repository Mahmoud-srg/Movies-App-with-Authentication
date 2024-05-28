import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet";

const Profile = () => {
  let { userData } = useContext(AuthContext);

  return (
    <>
      {/* <div className="py-5">
        <h3>Name: {userData?.name}</h3>
        <h3>username: {userData?.username}</h3>
        <h3>email: {userData?.email}</h3>
      </div> */}
      <div className="py-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="text-center">
              <h2 className="card-title">{userData?.name}</h2><hr />
              <p className="text-muted">User Name: @{userData?.username}</p>
            </div>
            <hr />
            <div className="text-center">
              <h5>Email:</h5>
              <p>{userData?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  );
};

export default Profile;
