import React, { useState } from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native';

 const FlatListView = () => {
    const [ people , setPeople ] = useState([
        {name: "shaun" , id:"1"},
        {name: "mario" , id:"2"},
        {name: "luigi" , id:"3"},
        {name: "mark" , id:"4"},
        {name: "king" , id:"5"},
        {name: "Jinn" , id:"6"},
        {name: "paul" , id:"7"},
        {name: "kessie" , id:"8"}
    ])

    const pressHandler = (id)=>{
        setPeople((prevPeople)=>prevPeople.filter(person=>person.id!==id))
    }

    return (
        <View style={styles.container}>
          {/* FlatList automatically gives a key to the component */}
          {/* FlatList also loads the data items in chunks not one at a whole time */}
          <FlatList 
            numColumns={2}
            keyExtractor={(item)=>item.id}
            data={people}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 10
    }
  });

export default FlatListView;