import axios from "axios";
import { useEffect, useState } from "react";


const useUser = (email) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get(`https://wood-peckers.herokuapp.com/users/${email}`)
            .then(res => {
                setUser(res.data);
            })
    }, [email]);
    return [user, setUser]
};

export default useUser;