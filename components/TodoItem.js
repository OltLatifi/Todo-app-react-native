import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={() =>props.pressHandler(props.item.id)}>
            <Text style={styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth:1,
        borderRadius:10,
        borderStyle:'dashed',
        width:200,
    }
})
