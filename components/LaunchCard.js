import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function LaunchCard(props) {

    console.log('card props', props.launch.image, props.launch.name);

    return (
        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10, height: 125, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: props.launch.image }}/>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', marginRight: 15, marginLeft: 5 }}>
                <Text style={{ color: 'black', fontSize: 14}}> {props.launch.name}</Text>
                <Text numberOfLines={5} style={{ fontSize: 12 }}>{props.launch.details}</Text>
            </View>

        </TouchableOpacity>
    )
}

