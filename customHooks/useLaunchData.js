import { useEffect, useState} from 'react';

export default function useLaunchData() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetchLaunches();
    }, [])

    const fetchLaunches = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("https://api.spacexdata.com/v3/launches", requestOptions)
        .then(response => response.json())
        .then(result => {
            //map over results to return info objects for each entry with name, details and image
            let launchData = result.map(launch => {
                let info = {
                    "name": launch.mission_name,
                    "details": launch.details,
                    "image": launch.links.mission_patch
                }
                return info;
            })
            //set state variable to array of objects
            setLaunches(launchData);
        })
        .catch(error => console.log('error', error));
    }

    return [launches];

};