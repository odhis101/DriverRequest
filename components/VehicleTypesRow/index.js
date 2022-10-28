import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import types from '../../assets/data/types';


const RowTypes = (props) => {
  const getImage = ()=> {

    if (type.type === 'ambulance'){
      return require('../../assets/ambulance.png')
    }
    if (type.type === 'helicopter'){
      return require('../../assets/helicopter.png')
    }
    return console.log('joshua')
  }
  const {type} = props ;
    return(
        <View style={styles.Container}>
          {/* image */}
          <Image style={styles.image} source={getImage ()}></Image>

          <View style={styles.middleContainer}>
            <Text style= {styles.type}> {type.type}
                <Ionicons name={'person'} size ={12} />
                3
            </Text>
            <Text style={styles.time}>
                8:03 pm drop off
            </Text>

          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh {type.price}
            </Text>


          </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 20,
        

    },
    image:{
        height:60,
        width:60,
        resizeMode:'contain',
    },
    middleContainer:{
      marginHorizontal:10,
      flex:1,
      marginBottom:5,
    },

    type:{
      fontWeight:'bold',
      fontSize:15,

    },
    rightContainer:{
      alignItems:'center',
      width:100,
      justifyContent:'flex-end',
      flexDirection:'row',


    },
    time :{
      color:'#5d5d5d',
    },
    price:{
      fontWeight:'bold',
      fontSize:14,
      marginLeft:5,
    },

   

  });
export default RowTypes;