import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
const HomeLogo = (props) => {
   
    return(
        <View>
        <Image 
            style= {styles.Image}
            source={require( '../assets/HealthWetu.png' )}
            />
   
   </View>
    )
}
const styles = StyleSheet.create({
  
   
    Image:{
        
        paddingTop:20,
        margin:50,
        height:350,
        width:'auto',
    },

  });
export default HomeLogo;

