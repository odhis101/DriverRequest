import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button,Pressable,TextInput} from 'react-native';
import HomeLogo from '../../components/homeLogo';
import Types from '../../components/DiffrentTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native'; 
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createOrder} from '../../src/graphql/mutations';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import io from 'socket.io-client';;
import { db } from '../../components/config';
import * as Location from 'expo-location';


const SearchResults = ({navigation}) => {

  const [message, setMessage] = useState('');
  const [output, setOutput] = useState([]);
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
          console.log('sending user location', { latitude, longitude }, 'to server loCATION');
          socket.emit('ambulance location', {latitude,longitude});
        },
      );
    })();
  }, []);

 
  //const [originPlace,setOriginPlace]= useState()
  const route = useRoute();
  const [Desitnation,setDesitnation]= useState()
  const {originPlace, destinationPlace} = route.params
  console.log('this is',originPlace,destinationPlace)
  console.log('hello world')
  const pressHandler =() =>{
  navigation.navigate('EnRoute');
}


const origin ={
  latitude: originPlace.details.geometry.location.lat,
  longitude: originPlace.details.geometry.location.lng,
}
const destination ={
  latitude:destinationPlace.details.geometry.location.lat,
  longitude: destinationPlace.details.geometry.location.lng,
}
const onSend = async () => {

  const userInfo = await Auth.currentAuthenticatedUser();
  //console.log(userInfo.attributes)
  const name =userInfo.signInUserSession.accessToken.payload.username
  console.log('here it is ')
  const userInfos = 'joshua'
  const date = new Date();
  addDoc(collection(db, "orders"), {     
    username: name,
    originLatitude: originPlace.details.geometry.location.lat,
    oreiginLongitude: originPlace.details.geometry.location.lng,
    destLatitude: destinationPlace.details.geometry.location.lat,
    destLongitude: destinationPlace.details.geometry.location.lng,
    date: date,
    status: "NEW",
    type: "ambulance",
  }).then(() => { 
    // Data saved successfully!
    console.log('data submitted');  
    //navigation.navigate('EnRoute');

  }).catch((error) => {
        // The write failed...
        console.log(error);
  });


}
const onSubmit = async () => {

  // submit to server
  try {
    const userInfo = await Auth.currentAuthenticatedUser();

    const date = new Date();
    const input = {
      createdAt: date.toISOString(),
      originLatitude: originPlace.details.geometry.location.lat,
      originLongitude: originPlace.details.geometry.location.lng,
      type: 'Ambulance',
      destLatitude: destinationPlace.details.geometry.location.lat,
      destLongitude: destinationPlace.details.geometry.location.lng,

      userId: userInfo.attributes.sub,
      status: "NEW",
    }


    const response = await API.graphql(
      graphqlOperation(
        createOrder, {
          input: input
        },
      )
    )

    console.log('it worked ?',createOrder);

    navigation.navigate('OrderPage', { id: response.data.createOrder.id });
  } catch (e) {
    console.log('no it didnt work');
    console.error(e);
  }
}
    return(
        <View>
            
               <MapView style={styles.Image}
                provider={PROVIDER_GOOGLE}
               initialRegion={{
                latitude: originPlace.details.geometry.location.lat,
                longitude: originPlace.details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }} 
              >
              <Marker 
              coordinate={{latitude:originPlace.details.geometry.location.lat,longitude: originPlace.details.geometry.location.lng}}
            >
              <Image source={require('../../assets/helicopter.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
              </Marker>

              <MapViewDirections
              origin={origin}
              destination={destination}
              strokeWidth={ 5 }
              strokeColor= 'red'
              apikey={'AIzaSyAeRdORzU5z5rUedWcqGLZxRwE_6w9isRc'}
              />
              <Marker 
         
              coordinate={origin}
              title={'origin'}

              />
              <Marker 
              coordinate={destination}
              title={'destination'}
              />
              </MapView>
            
          <Types />  
          <Pressable onPress={onSend} style={styles.confirm}> 
              <Text style={styles.text}>
                Confirm Requests
              </Text>
             
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    confirm:{
        padding: 10,
        margin:10,
        marginRight:10,
        backgroundColor:'red',
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