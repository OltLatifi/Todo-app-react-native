import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo's</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:120,
        paddingTop:80,
        backgroundColor:'coral',
        marginTop:120,
    },
    title:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    }
})
