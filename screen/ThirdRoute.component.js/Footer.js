import {View, Text, FlatList, Image,StyleSheet} from 'react-native';
const data = [
    {  img: require('../../assets/image/first.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    {  img: require('../../assets/image/second.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    {  img: require('../../assets/image/third.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    {  img: require('../../assets/image/third.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
   

]
export default function Footer() {
    return(
        <View style={{flex:0.4, backgroundColor:'#1D1F3E'}}>
            <Text style={{fontWeight:'700', fontFamily:'Open Sans', fontSize:20, color:'#FFFFFF', marginTop:'5%',marginLeft:'2.5%',}}>Albums</Text>
            <FlatList 
            data={data}
            renderItem={
                ({ item }) => (
                    <View>
                    <Image source={item.img} style={{ width: 130, height: 120, borderRadius:10, marginLeft:'2.5%', marginTop:'5%' }} />
                    <View style={{justifyContent:'center', alignItems:'center', }}>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text  style={styles.text1}>{item.author}</Text>
                        </View>
                   
                </View>)
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D1F3E',
        flex: 0.3,
        width: '95%',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    newsongs: {
        marginVertical: '3%',
    },
    heading: {
        fontWeight: '700',
        fontFamily: 'Open Sans',
        fontSize: 20,
        width: '27%',
        height: '15%',
        color:'#FFFFFF',
        marginLeft:'2%'
    },
    text:{
        color:'#FFFFFF',
        fontWeight: '700',
        fontFamily: 'Open Sans',
        fontSize:14,
    },
    text1:{
        color:'#FFFFFF',
        fontWeight: '400',
        fontFamily: 'Open Sans',
        opacity:0.7,
        fontSize:10
    }

});