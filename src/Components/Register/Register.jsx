import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {

  let {savaUserData} = useContext(AuthContext);

  let navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const [user, setUser] = useState({
    username:'',
    name:'',
    email:'',
    password:''
  })

  function getUserData(eventInfo) {
    let myuser = {...user}
    myuser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myuser);
    // console.log(user);
  }

  async function sendRegisterRequist() {
    try {
      let {data} = await axios.post(`https://tarmeezacademy.com/api/v1/register`,user);
      console.log(data.token);
      localStorage.setItem( "token" , data.token)
      localStorage.setItem( "userData", JSON.stringify(data.user))
      savaUserData();
      navigate('/')
      setIsLoading(false)
    } catch (error) {
      setErrors(error.response.data.errors)
      setIsLoading(false)
      // console.log(errors.email);
    }
  }

  function submitRegisterForm(eventInfo) {
    setIsLoading(true)
    eventInfo.preventDefault()
    sendRegisterRequist();

  }

  
  return (
    <>
      
        <form className="py-5" onSubmit={submitRegisterForm}>
          <label htmlFor="username" className="mb-2">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control my-input mb-3"
            onChange={getUserData}
          />
          {errors.username?<p className="bg-danger py-2 px-3 rounded-3">{errors.username}</p>:''}
          <label htmlFor="name" className="mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control my-input mb-3"
            onChange={getUserData}
          />
          {errors.name?<p className="bg-danger py-2 px-3 rounded-3">{errors.name}</p>:''}
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control my-input mb-3"
            onChange={getUserData}
            />
            {errors.email?<p className="bg-danger py-2 px-3 rounded-3">{errors.email}</p>:''}
          <label htmlFor="password" className="mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control my-input mb-3"
            onChange={getUserData}
          />
            {errors.password?<p className="bg-danger py-2 px-3 rounded-3">{errors.password}</p>:''}

          <button className="btn btn-outline-info mt-2" type="submit" > {isLoading?<i className="fas fa-spin fa-spinner"></i>:'Register'} </button>
        </form>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Register</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    </>
  );
};

export default Register;
