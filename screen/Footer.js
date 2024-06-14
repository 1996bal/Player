import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const tracklist = [
    { img: require('../assets/image/y.png'), title: ' Add Your Artist' },
    { img: require('../assets/image/Vector.png'), title: 'Taylor Swift' },
    { img: require('../assets/image/Vector.png'), title: 'Taylor Swift' },
    { img: require('../assets/image/Vector.png'), title: 'Taylor Swift' },

]

export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Favourite Artist</Text>


            <FlatList
                data={tracklist}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Details')}
                 >
                        <View style={{ backgroundColor: '#111536', width: '80%', height: 35, marginHorizontal: 40, borderRadius: 10, flexDirection: 'row', marginVertical: 8 }}>
                            <Text style={{ position: 'absolute', left: 15, top: 5 }}>{item.title}</Text><Image source={item.img} style={{ position: 'absolute', right: 15, top: 10 }} />
                        </View>
                        </TouchableOpacity>
                    )
                }
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D1F3E',
        flex: 0.35,
        width: '95%',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        width: '67%',
        height: '13%',
        marginLeft: '2%',

    }
})