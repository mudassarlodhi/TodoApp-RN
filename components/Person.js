import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View , TextInput } from 'react-native';

export const Person = () => {
    const [name , setName] = useState("shawn");
    const [person , setPerson] = useState({
      name:"john",
      age: "14"
    })
  
    const clickHandler = ()=> {
      setName("Mudasser")
    }
  
    return (
      <View style={styles.container}>
        <Text>App.js is working on your app!</Text> 
        <View style={styles.buttonContainer}>
            <Text style={styles.boldText}>My Name is {name}</Text>
            <Button title="Update State" onPress={clickHandler} />
        </View>
        <Text>Enter Name:</Text>
        <TextInput 
            style={styles.input}
            placeholder="John Doe"
            value={person.name}
            multiline
            onChangeText={(val)=>setPerson({
              ...person,
              name: val
            })} />
  
  
        <Text>Enter Age:</Text>
        <TextInput 
            keyboardType="numeric"
            style={styles.input}
            placeholder="e.g. 33"
            value={person.age}
            onChangeText={(val)=>setPerson({
              ...person,
              age: val
            })} />
  
        <Text>His name is {person.name} and age is {person.age}</Text>
        <StatusBar style="auto" />
        <View style={styles.header}>
             <Text style={styles.boldText}>Hello World</Text>
        </View>
        <View style={{...styles.body , ...styles.boldText}}>
             <Text style={styles.boldText}>Lorem ipsum <Text>dolor</Text> sit amet.</Text>
             <Text>Lorem ipsum dolor sit amet.</Text>
             <Text>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: "pink",
      padding:20,
      marginTop: 20
    },
    body: {
      backgroundColor: "yellow",
      padding: 20,
      marginTop: 10
    },
    buttonContainer: {
      marginTop: 20,
      marginBottom: 10
    },
    boldText: {
      fontWeight: "bold"
    },
    input : {
      borderWidth: 1,
      borderColor: "#777",
      padding: 8,
      margin: 10,
      minWidth:  250,
      borderRadius: 10
    }
  });

  export default Person;