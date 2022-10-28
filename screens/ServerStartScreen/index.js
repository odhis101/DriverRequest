import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button} from 'react-native';
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

//import styles from './styles.js';
const Homesearch = ({navigation}) => {
   {/*
    const origin ={
        latitude: originPlace.details.geometry.location.lat,
        longitude: originPlace.details.geometry.location.lng,
      }
      const destination ={
        latitude:destinationPlace.details.geometry.location.lat,
        longitude: destinationPlace.details.geometry.location.lng,
      }
    
    */}    
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [users, setUsers] = useState();
    const [requests, setRequests] = useState('default');
    const todoref = firebase.firestore().collection('orders');
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
   


    const pressHandlers =() =>{
        navigation.navigate('searchResults');
        
    }
    const pressHandler = async () =>{
        const cityRef = firebase.firestore().collection('orders').doc('FTgN89JHNyiaNQANVsRG');
        const doc = await cityRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }
    }
    useEffect(()  => {
        const checkRequest = async () => {
              const checkRequests = firebase.firestore().collection('orders').doc('FTgN89JHNyiaNQANVsRG');
              const doc = await checkRequests.get();
                if (!doc.exists) {
                console.log('No such document!');
                }
                else{
                    console.log('Document data:', doc.data());
                    setRequests(doc.data())
                    handleModal()
                }
    }
   
   setInterval(checkRequest, 100000);
}, [])
console.log('requests')
console.log('this is requests',requests)

 


    return(
        <ScrollView>
        <View>
        <MapView style={styles.Image}
                provider={PROVIDER_GOOGLE}
               initialRegion={{
                latitude: 21.7645,
                longitude: 72.1519,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }} 
              >
              <Marker 
              coordinate={{latitude:21.7645,longitude: 72.1519}}
            >
              <Image source={require('../../assets/helicopter.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
              </Marker>
              </MapView>
           < Loginbtn text={'42 requests on-going'}/>
            
            <View style= {styles.container}>
           <StartBTN text={'stop'} onPress={handleModal} />
           <Modal isVisible={isModalVisible}>
        <View>
          <View>
            <View style={styles.Modalcontainer}>
            <Text style={styles.ModalTitle}> New Ambulance Request</Text>
            <Text style={styles.ModalTitle}> Pick up Location :  </Text>
            <Text style={styles.ModalTitle}> name: {requests.username}  </Text>
            <StartBTN text={'Start '} onPress={handleModal} />
            </View>


          </View>
          <Button title="Cancel Request" onPress={handleModal} />
        </View>
      </Modal>
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

