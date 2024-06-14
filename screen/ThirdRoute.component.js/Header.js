import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#1D1F3E', width:'100%', height:'100%', borderBottomLeftRadius:100,borderBottomRightRadius:100}}>
            <Image source={require('../../assets/image/Cart03.png')} style={{width:150, height:190,marginLeft:'30%', marginTop:'5%' }} />
            <Text style={styles.text}>Olivia Rodrigo</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontFamily: 'Open Sans',
        fontSize: 24,
        width: '40%',
        height: '12%',
        color: '#FF7A8A',
  
        position:'absolute',
        bottom:10,
        marginHorizontal:'33%'

    },
    container:{
        flex:0.41,
        backgroundColor:'#111536' //1D1F3E
    }
})