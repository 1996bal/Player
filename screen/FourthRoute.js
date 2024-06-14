import { View, Text, StyleSheet, Dimensions, StatusBar, Image, FlatList } from 'react-native';
export default function FourthRoute(){
    return(
    <View style={ { backgroundColor: 'green', flex:1 }} >
  
      <Image  source={require('../assets/image/bg_now_playing.png')} style={ {  flex:1, width:400 }} />
    </View>
  )
}