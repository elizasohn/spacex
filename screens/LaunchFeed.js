import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LaunchList from '../components/LaunchList';
import useLaunchData from '../customHooks/useLaunchData';

export default function LaunchFeed() {
    const [launches] = useLaunchData()
    console.log('launches', launches);
    
    return (
        <View style={{ flex: 1 }}>
                <LaunchList
                    data={launches}
                />
        </View>
    );
}

