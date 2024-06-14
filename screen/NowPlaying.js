import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function NowPlaying({ navigation }){
    return(
        <View style={ { backgroundColor: 'green', flex:1 }} >
            <ImageBackground source={require('../assets/image/bg_now_playing.png')} style={ {  flex:1, width:400 }}>
            <Image  source={require('../assets/image/Light.png')} style={ {  flex:1, width:400 }} />
            
            <View style={{position:'absolute', flexDirection:'row', marginTop:'5%'}}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/image/arrow.png')} style={{marginLeft:'5%'}} />
            </TouchableOpacity>
            <Image source={require('../assets/image/share.png')}  style={{marginLeft:'75%'}} />
            <Image source={require('../assets/image/threeicon.png')} style={{marginLeft:'5%'}} />
          
           
            </View>
            <Image  source={require('../assets/image/Glow.png')} style={ {  width:275, height:270,  borderWidth:5, position:'absolute',marginTop:'50%', marginLeft:'15%' }} />
            <View style={{width:150, height:50,position:'absolute',bottom:'30%',}}>
           <View style={{ marginLeft:'30%'}}>
           <Text style={{color:'#FFFFFF', marginVertical:10}}>Imagine Dragons...</Text>
           <Text style={{color:'#F5F5FF'}}>Thunder</Text>
           </View>
           <View style={{flexDirection:'row'}}>
       <Image source={require('../assets/image/Icon-6.png')}/>
       <Image source={require('../assets/image/Icon-4.png')}/>
        <Image source={require('../assets/image/Icon-7.png')}/>
        <Image source={require('../assets/image/Icon-3.png')}/>
  
     
        <Image source={require('../assets/image/Icon-5.png')}/>
    
       </View>
       </View>
            </ImageBackground>
  
      </View>
    )
}