import { useEffect } from "react";
import { useState } from "react";

const useToken = () => {
    const [token, setToken] = useState([]);
    const [user, setUser] = useState([]);
    // console.log(user)
    useEffect(() => {
       const getToken=window.localStorage.getItem("token");
       setToken(getToken);

      /*  const getUserStr=localStorage.getItem("user");
       
       const getUser= JSON.parse(getUserStr);
    //    console.log(getUser);
       setUser(getUser); */

    }, []);
    return [token, setToken];
}

export default useToken;