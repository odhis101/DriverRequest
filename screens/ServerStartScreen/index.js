import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calling from '../../components/calling';
import OurData from '../../components/ourdata';
import OurButton from '../../components/GoToButton';
import ModuleButton from '../../components/moduleButton';
import Loginbtn from '../../components/loginbtn';
import StartBTN from '../../components/StartBTNServer';
import MapViewDirections from 'react-native-maps-directions';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {db } from "../../components/config"
import { firebase } from "../../components/fetch";
import { useEffect,useState } from 'react';
import Modal from "react-native-modal";
import { request } from 'express';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';


//import styles from './styles.js';
const Homesearch = ({navigation}) => {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const socket = io('ws://192.168.0.31:8080', { transports: ['websocket'] });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 5000 },
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          
          // Emit location data on 'userLocation' event
          console.log('sending ambulance location', { latitude, longitude }, 'to server loCATION');
          socket.emit('ambulance location', `${latitude} ${longitude}`);
        },
      );
    })();
  }, []);


const originPlace ={
  latitude: location.latitude,
  longitude: location.longitude,
}

const pressHandlers =() =>{
  navigation.navigate('EnRoute', {
    originPlace,

  });
  
}
 


    return(
        <ScrollView>
        <View>
        <MapView style={styles.Image}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  /*
                   latitude: originPlace.details.geometry.location.lat,
                   longitude: originPlace.details.geometry.location.lng,
                   */
                   latitude: -1.2921,
                   longitude: 36.8219,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421,
                 }} 
              >
              <Marker 
              coordinate= {{latitude:location.latitude,longitude:location.longitude}}
            >
              <Image source={require('../../assets/ambulance.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
              </Marker>
              </MapView>
           < Loginbtn text={'42 requests on-going'}/>
            
            <View style= {styles.container}>
           <StartBTN text={'stop'} onPress={pressHandlers} />
         
        <View  style={styles.statusContainer}>
        <Text style={styles.container}> You Are Online</Text>
        </View>
        </View>
   

      

   </View>
   </ScrollView>
    )
}
const styles = StyleSheet.create({
    Modalcontainer:{
        backgroundColor:'#fff',
        width:'auto',
        height:120,
    },

    ready:{
        color:'red',
    },
    status:{
        fontSize:20,
    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:'#6e6e6e',
    },
    container:{
        alignItems:'center',
    },
    Image:{
        
        paddingTop:20,
        height:300,
        width:'auto',
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

  });

export default Homesearch;

