import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function AddTodo(props){
    const[text, setText] = useState('')

    function changeHandler(value){
        setText(value)
    }

    function buttonHandler(){
        props.submitHandler(text)
        setText("")
    }

    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}/>
            <Button
                title='submit'
                onPress={buttonHandler}
                color='coral'/>
        </View>
    )
}



const styles = StyleSheet.create({
    input:{
        padding: 16,
        marginTop: 16,
        marginBottom:16,
        borderColor: '#bbb',
        borderBottomWidth:1,
        borderRadius:10,
        borderStyle:'dashed',
        width:200,
    }
})
