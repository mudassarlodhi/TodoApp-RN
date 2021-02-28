import React, { useState } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos , setTodos] = useState([
        {text: "Buy A Coffee" , id: "1"},
        {text: "Go To A Job" , id: "2"},
        {text: "Learn Programming" , id: "3"},
        {text: "Workout" , id: "4"},
    ])

    const onPressHandler = (id)=>{
        setTodos(prevTodos=>prevTodos.filter(todo=>todo.id!==id)) 
    }

    const submitHandler = (text)=>{
        if(text.length > 3) {
            setTodos((prevTodos)=>[
                {text: text , id: Math.random().toString()},
                ...prevTodos
            ])
        }
        else {
            Alert.alert("OOPS!" , "Todos must be over 3 chars long" , [
                {text:"Understood" , onPress:()=>console.log("Alert closed")}
            ])
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
           <Header />
           <View style={styles.content}>
               {/*Todo Form */}
               <AddTodo submitHandler={submitHandler} />
               <View style={styles.list}>
                   <FlatList
                     data={todos}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=><TodoItem item={item} pressHandler={onPressHandler} />} />
               </View>
           </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    content: {
        padding: 40,
        flex:1
    },
    list: {
        flex:1,
        marginTop: 20
    }
  });

export default TodoApp;
