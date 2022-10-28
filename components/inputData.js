import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function InputData ({text,onPress}){
    return (
        <TextInput 
        style={styles.button}
        placeholder={text}
        />
    )
}
const styles = StyleSheet.create({
button:{
        backgroundColor:'#fff',
        margin:10,
        height: 55,
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
buttonText:{
    fontSize:14,
    color:'grey',
    
    
},


})