import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ImagePicker from './screens/ImagePicker';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home Screen" component = {HomeScreen} />
          <Stack.Screen name = "Profile" component = {ProfileScreen} />
          <Stack.Screen name = "Image" component = {ImagePicker} />
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
