import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable} from 'react-native';
import RowTypes from '../VehicleTypesRow';
import types from '../../assets/data/types';
const Types = (props) => {
const confirm = () => {
  navigation.navigate('EnRoute');
}
    return(
        <View>
          {types.map(type => <RowTypes  type ={type}/>)}
           

         
        </View>
    )
}
const styles = StyleSheet.create({

  
   

  });
export default Types;