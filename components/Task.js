import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


const Task = ({ text }) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            </View>
            <View><Text style={styles.text}>{text}</Text></View>
            <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemLeft: {
        width: 24,
        height: 24,
        backgroundColor: 'dodgerblue',
        opacity: 0.4
    },
    square: {
        borderRadius: 5,
    },
    circular: {
        width: 15,
        height: 15,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'dodgerblue'
    },
})

export default Task