import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LaunchList from '../components/LaunchList';

export default function LaunchFeed() {
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
                let launchData = result.map(launch => {
                    let info = {
                        "name": launch.mission_name,
                        "details": launch.details,
                        "image": launch.links.mission_patch
                    }
                    return info;
                })
                setLaunches(launchData);  
            })
            .catch(error => console.log('error', error));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <LaunchList
                    data={launches}
                />
            </View>
        </View>
    );
}

