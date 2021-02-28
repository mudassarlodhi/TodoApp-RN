import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.textOne}>One</Text>
            <Text style={styles.textTwo}>Two</Text>
            <Text style={styles.textThree}>Three</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection: "row",
        paddingTop: 40,
        backgroundColor: "#ddd",
        justifyContent: "space-around",
        alignItems: "flex-end",
        
    },
    textOne : {
        backgroundColor: "violet",
        padding: 10,
        flex:2
    },
    textTwo : {
        backgroundColor: "red",
        padding: 30,
        flex:1
    },
    textThree : {
        backgroundColor: "orange",
        padding: 40,
        flex:1
    }
})