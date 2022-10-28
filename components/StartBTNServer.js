import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ModuleButton ({text,onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'green',
        margin:10,
        width:160,
        height:50,
        padding:10,
        flexDirection:'row',
        justifyContent: 'center',
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
    color:'white',
    fontWeight:'600',
    
    
},


})