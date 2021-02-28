import React, { useState } from 'react'
import { StyleSheet, Text, View , ScrollView } from 'react-native';

 const ListScrollView = () => {
    const [people , setPeople] = useState([
        {name: "shaun" , key:"1"},
        {name: "mario" , key:"2"},
        {name: "luigi" , key:"3"},
        {name: "mark" , key:"4"},
        {name: "king" , key:"5"},
        {name: "Jinn" , key:"6"},
        {name: "paul" , key:"7"},
        {name: "kessie" , key:"8"}

    ])
    return (
        <View style={styles.container}>
          <ScrollView>
            { people.map(person=> (
            <View key={person.key}>
                <Text style={styles.item}>{person.name}</Text>
              </View> )
            )}
            </ScrollView>
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
        fontSize: 24
    }
  });

export default ListScrollView;