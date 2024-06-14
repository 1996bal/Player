import {View, Text, Image} from 'react-native';

export default function Body() {
    return(
        <View style={{flex:0.25, backgroundColor:'#1D1F3E'}}>
            
            <View style={{flexDirection:'row',marginTop:'4%'}}><Image source={require('../../assets/image/Like.png')} style={{marginLeft:'5%'}} /><Text style={{marginLeft:'5%', color:'#FFFFFF'}} >Like</Text></View>
            <View  style={{flexDirection:'row',marginTop:'4%' }}><Image source={require('../../assets/image/Playlist.png')} style={{marginLeft:'5%'}}/><Text style={{marginLeft:'5%', color:'#FFFFFF'}}>Add playlist</Text></View>
            <View  style={{flexDirection:'row',marginTop:'4%' }}><Image source={require('../../assets/image/share.png')} style={{marginLeft:'5%'}}/><Text style={{marginLeft:'5%', color:'#FFFFFF'}}>Share</Text></View>
            <View  style={{flexDirection:'row',marginTop:'4%' }}><Image source={require('../../assets/image/Unknown.png')} style={{marginLeft:'5%'}}/><Text style={{marginLeft:'5%', color:'#FFFFFF'}}>About Recomendation</Text></View>
        </View>
    )
}