import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableHighlight, Dimensions } from 'react-native';

//components
import LaunchCard from './LaunchCard';

export default function LaunchList(props) {
    useEffect(() => {
        setPageData(onPage1)
    }, [props])

    const [pageData, setPageData ] = useState(props.data.slice(0,6));
    
    const onPage1 = () => {
        setPageData(props.data.slice(0,6))
    };

    const onPage2 = () => {
        setPageData(props.data.slice(6,12))
    };

    const onPage3 = () => {
        setPageData(props.data.slice(12, 18))
    };

    const onPage4 = () => {
        setPageData(props.data.slice(18, 24))
    };

    const onPage5 = () => {
        setPageData(props.data.slice(24, 30))
    };



    return (
    <View style={{ flex: 1 }}>
        <FlatList
            scrollEnabled={false}
            style={{ flex: 1 }}
            data={pageData}
            renderItem={({ item }) => 
                <LaunchCard 
                    launch={item}
                />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={FlatListItemSeparator}
            ListFooterComponent={
                <ListFooter 
                    onPage1={()=> onPage1()}
                    onPage2={() => onPage2()}
                    onPage3={() => onPage3()}
                    onPage4={() => onPage4()}
                    onPage5={() => onPage5()}
                    />}
        />
    </View>
    )

}

function ListFooter(props) {
    return (
        <View style={{ height: 40, flex: 1, flexDirection: 'row' }}>
            <View style={{ position: 'absolute', left: 0, right: 0, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text onPress={props.onPage1} style={{ fontSize: 14, fontWeight: 'bold', color: 'black'}}>  1  </Text>
                <Text onPress={props.onPage2}>  2  </Text>
                <Text onPress={props.onPage3}>  3  </Text>
                <Text onPress={props.onPage4}>  4  </Text>
                <Text onPress={props.onPage5}>  5  </Text>
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