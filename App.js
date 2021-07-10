import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const[data, setData] = useState([
        {text:'Do my homework', id:'1'},
        {text:'Go to the gym', id:'2'},
        {text:'Read a few pages', id:'3'},
    ])
  
    function handlePress(id){
        setData((prevData)=>{
          return prevData.filter(todo => todo.id != id)
          // the old array is getting changed with an array that doesn't include the element clicked
        })
    }

    function submitHandler(text){
      setData((prevData)=>{
        return[
          {text:text, id:Math.random().toString()}, ...prevData
        ]
      })
    }


  return (
    <View style={styles.container}>
      <Header/>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={handlePress}/>
            )} />
        </View>
      </View>
  );
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    margin:'20%',
  }

});
