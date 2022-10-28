import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button,Pressable} from 'react-native';
import HomeLogo from '../../components/homeLogo';
import Types from '../../components/DiffrentTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
const SearchResults = ({navigation}) => {
  const [fromText, setFromText] = useState()
  const [destinationText,setDestinationText] = useState();
  const [originPlace,setOriginPlace]= useState()
  const [Desitnation,setDesitnation]= useState()
  const pressHandler =() =>{
    navigation.navigate('EnRoute');
    
}
    return(
        <View>
        

            
             <Image 
            style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
     {/* the  details of the clien should be here */}
     <View style={styles.Container}>
             <Image style={styles.image} source='../assets/ambulance.png'></Image>
          <View style={styles.middleContainer}>
            <Text style= {styles.type}>
               Jonathan Kagame
            </Text>
            <Text style={styles.time}>
                8:03 pm drop off
            </Text>


          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh {7000}
            </Text>
            


          </View>
<View>
 
</View>
            
        </View>
          <Pressable onPress={pressHandler} style={styles.confirm}> 
              <Text style={styles.text}>
                Confirm Trip
              </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    Title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'600',
        margin:10,
      
      },
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
    confirm:{
        padding: 10,
     
        
        backgroundColor:'green',
        alignItems:'center',
        
      },
      text:{
        color:'white',
        fontWeight:'bold',
      },
       
   
    Image:{   
        paddingTop:40,
        height:250,
        width:'auto',
    },
    container:{
   
      backgroundColor:'white',
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
      fontSize:14,
      color:'black',
      
  },
  Timebar:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:35,
      padding:10,
      backgroundColor:'#fff',
      borderRadius:50,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,

      elevation: 5,

  },
  inputBox:{
      backgroundColor:'#fff',
      margin:5,
      padding:5,
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

  });
export default SearchResults;