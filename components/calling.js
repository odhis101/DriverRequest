import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
const Calling = (props) => {
   
    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.inputText}> {props.text}</Text>
            </View>
   </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:160,
        height:60,
        margin:10,
        padding:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },
    inputText:{
        fontSize:15,
        fontWeight:'600',
        color:'#6e6e6e',


        
    },

});

export default Calling