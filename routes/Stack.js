
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import EnRoute from '../screens/EnRoute';
import ServerHome from '../screens/ServerHome';
import ServerStartScreen from '../screens/ServerStartScreen';
import NewRequest from '../screens/NewRequest';

const Stack = createStackNavigator();
const RootNavigator = () => {
    return (
     <NavigationContainer  >
        <Stack.Navigator  
        defaultScreenOptions={ServerHome}>

            <Stack.Screen
                name="Home"
                component={ServerHome}
              
             />
             <Stack.Screen
                name="destination"
                component={ServerStartScreen}
              
             />
           
             <Stack.Screen
                name="EnRoute"
                component={EnRoute}
              
             />
            </Stack.Navigator>
    
     </NavigationContainer>
    );
    };
export default RootNavigator