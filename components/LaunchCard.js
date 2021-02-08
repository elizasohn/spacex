import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function LaunchCard(props) {

    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.launch.image }}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.launchName}>{props.launch.name}</Text>
                <Text numberOfLines={5} style={styles.details}>{props.launch.details}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row', 
        marginVertical: 5, 
        height: 100
    },
    imageContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    image: { 
        width: 80, 
        height: 80 
    },
    infoContainer: { 
        flex: 2, 
        justifyContent: 'center', 
        marginRight: 15, 
        marginLeft: 5 
    },
    launchName: { 
        color: 'black', 
        fontSize: 14 
    },
    details: {
        fontSize: 12 
    }
})

