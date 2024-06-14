import { View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NowPlaying from './NowPlaying';
import TabViewExample from './index'
const Stack = createNativeStackNavigator();
export default function Tab() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={TabViewExample} />
                <Stack.Screen name="Details" component={NowPlaying} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}