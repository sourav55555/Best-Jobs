import React, { useEffect } from 'react';

const getJobDetais = () =>{
    const [details, setDetails] = []
    useEffect( () => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setDetails(data));
    } , [])

    return details;
}

export default getJobDetais