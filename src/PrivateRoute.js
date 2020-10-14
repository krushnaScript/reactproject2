import React from "react";
import {Route , Redirect} from 'react-router-dom';

let PrivateRoute = ({component : Component , ...rest}) => {
    
    return <Route {...rest} render={(props) => {
            const userdata = document.cookie;
            return !userdata ? <Redirect to="/login"/> : <Component {...props}/>
    }}/>
};
export default PrivateRoute;
