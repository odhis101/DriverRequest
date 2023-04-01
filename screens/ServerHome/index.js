import React from 'react';
import { StyleSheet, Text, Image,FlatList, TouchableOpacity, View,ScrollView,Button,TextInput} from 'react-native';
import { useEffect,useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calling from '../../components/calling';
import OurData from '../../components/ourdata';
import OurButton from '../../components/GoToButton';
import ModuleButton from '../../components/moduleButton';
import Loginbtn from '../../components/loginbtn';
import StartBTN from '../../components/StartBTNServer';
import WebSocket from 'react-native-websocket';
import io from 'socket.io-client';

//import styles from './styles.js';
const Homesearch = ({navigation}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [inputValue, setInputValue] = useState('');

  const socket = io('ws://192.168.0.31:8080', { transports: ['websocket'] });

    useEffect(() => {
        socket.on('connect', () => {
          console.log('Socket.IO connected');
    
          // Send a message to the server after the connection is established
          socket.emit('chat message', 'Hello, server!');
        });
    
        socket.on('chat message', (message) => {
          console.log('Socket.IO message received:', message);
          setMessage(message);
        });
    
        socket.on('disconnect', () => {
          console.log('Socket.IO disconnected');
        });
    
        socket.on('connect_error', (error) => {
          console.error('Socket.IO connection error:', error);
        });
    
        socket.on('connect_timeout', (timeout) => {
          console.error('Socket.IO connection timeout:', timeout);
        });
    
        socket.on('error', (error) => {
          console.error('Socket.IO error:', error);
        });
      }, []);
    
      const handleClick = () => {
        console.log('Sending message to server');
        socket.emit('chat message', { text: inputValue });
        setInputValue('');
    };
    
      const pressHandler = () => {
        navigation.navigate('destination');
      };
    return(
        <ScrollView>
        <View>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
           < Loginbtn text={'42 requests on-going'}/>
             <Image 
             style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
            <View style= {styles.container}>
           <StartBTN text={'start'} onPress={pressHandler} />
        <View  style={styles.statusContainer}>
        <Text style={styles.status}> You Are Offline</Text>
        </View>
        </View>
        <View>
        <FlatList
  data={messages}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={(item, index) => index.toString()}
/>
        <Text>{message.text}</Text>
        <TextInput value={inputValue} onChangeText={setInputValue} />
        <Button title="Send message to server" onPress={handleClick} />
    </View>

    

      

   </View>
   </ScrollView>
    )
}
const styles = StyleSheet.create({

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

