import React, { useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import { TextInput } from "react-native-gesture-handler";

export default function CreateLaunch(props) {
    const [ nameInputText, setNameInputText ] = useState('')
    const [ detailInputText, setDetailInputText ] = useState('')

    const onSubmitLaunch = () => {
        postLaunch();
    };

    const postLaunch = async () => {
        fetch("https://api.spacexdata.com/v3/launches", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInputText,
                details: detailInputText,
            })
        })
        .then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.imageUpload}/>
            <View>
                <TextInput
                    value={nameInputText}
                    multiline={false}
                    onChangeText={val => 
                        setNameInputText(val)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.nameTextInput}
                    placeholder={'Name...'}
                    placeholderTextColor={'gray'}
                    autoFocus={true}
                />
                <TextInput
                    value={detailInputText}
                    multiline={false}
                    onChangeText={val =>
                        setDetailInputText(val)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.nameTextInput}
                    placeholder={'Description...'}
                    placeholderTextColor={'gray'}
                    autoFocus={false}
                />
                <View style={styles.bottomRow}>
                    <Text style={styles.backText}>Back</Text>
                    <TouchableOpacity onPress={() => onSubmitLaunch} style={styles.submit} underlayColor='#ccc' >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    imageUpload: { 
        width: 200, 
        height: 200,
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 25, 
        alignContent: 'center', 
        alignSelf: 'center', 
        marginTop: 20, 
        marginBottom: 20 
    },
    nameTextInput: {
        maxHeight: 60,
        color: 'black',
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    submit: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    bottomRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-around' 
    },
    backText: { 
        alignSelf: 'center' 
    }
})