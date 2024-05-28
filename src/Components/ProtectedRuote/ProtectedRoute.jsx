import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    if (localStorage.getItem('userData')) {
        return props.children;
        
    }
    else {
        return <Navigate to='/Login'/>
    }

}

export default ProtectedRoute