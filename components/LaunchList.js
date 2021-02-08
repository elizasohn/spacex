import React from 'react';
import { View, FlatList, Text, TouchableHighlight, Dimensions } from 'react-native';

//components
import LaunchCard from './LaunchCard';

export default function LaunchList(props) {
    

    return (
    <View style={{ flex: 1 }}>
        <FlatList
            scrollEnabled={false}
            style={{ flex: 1 }}
            data={props.data.slice(0,6)}
            renderItem={({ item }) => 
                <LaunchCard 
                    launch={item}
                />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={FlatListItemSeparator}
            ListFooterComponent={ListFooter}
        />
    </View>
    )

}

function ListFooter() {
    return (
        <View style={{ height: 40, flex: 1, flexDirection: 'row' }}>
            <View style={{ position: 'absolute', left: 0, right: 0, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black'}}> 1 </Text>
                <Text> 2 </Text>
                <Text> 3 </Text>
                <Text> 4 </Text>
                <Text> 5 </Text>
            </View>
            <TouchableHighlight
                style={{
                    left: 300,
                    right: 20,
                    borderRadius: 40,
                    backgroundColor: 'lightgray',
                    width: 40,
                    height: 40,
                    borderColor: 'black',
                    borderWidth: 1,
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                underlayColor='#ccc'
                onPress={() => alert('Yaay!')}
            >
                <Text style={{ fontSize: 30, lineHeight: 35, color: 'black' }}> + </Text>
            </TouchableHighlight>
        </View>
    );
};

function FlatListItemSeparator() {
    return (
        <View
            style={{
                height: 0.5,
                width: "100%",
                backgroundColor: 'rgba(179, 179, 179, 0.4)',
            }}
        />
    );
};