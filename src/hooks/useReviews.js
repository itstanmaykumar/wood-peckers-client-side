import axios from 'axios';
import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get(`https://wood-peckers.herokuapp.com/reviews`)
            .then(res => {
                setReviews(res.data);
            })
    }, []);
    return [reviews, setReviews];
};

export default useReviews;