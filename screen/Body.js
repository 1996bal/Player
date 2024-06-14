import { View, Text, StyleSheet, Dimensions, StatusBar, Image, FlatList, ImageBackground } from 'react-native';

const data = [
    { id: 1, img: require('../assets/image/card01.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    { id: 2, img: require('../assets/image/Card02.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    { id: 3, img: require('../assets/image/Card03.png'), description: 'Urgent Siege', author: 'Damned Anthem' },
    { id: 4, img: require('../assets/image/Card03.png'), description: 'Urgent Siege', author: 'Damned Anthem' },

]

export default function Body() {
    return (

        <View style={styles.container}>
            <Text style={styles.heading}>New Songs</Text>
            <View style={styles.newsongs}>
                <FlatList data={data}
                    renderItem={
                        ({ item }) => (
                            <View>
                            <Image source={item.img} style={{ width: 130, height: 120, borderRadius:10, marginLeft:'2.5%' }} />
                            <View style={{justifyContent:'center', alignItems:'center', }}>
                            <Text style={styles.text}>{item.description}</Text>
                            <Text  style={styles.text1}>{item.author}</Text>
                                </View>
                           
                        </View>
                        )
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}

                />
            </View>
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