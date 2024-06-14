import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/splash.png')} style={styles.imgbackground}>

                <Text style={styles.text1} >Featured Song</Text>
                <Text style={styles.text2}>Follow The Leader ft. Jennifer</Text>
                <Text style={styles.text3}>Wisin & Yandel | Featured Song | 11.12.2021</Text>


            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D1F3E',
        flex: 0.3

    },
    imgbackground: {
        width: 390,
        height: 198,
        marginHorizontal: 10,
        marginVertical: 10,


    },
    img: {
        width: '330px',
        height: '198px',
        borderRadius: 30,
    },
    text1: {
        fontWeight: '700',
        fontFamily: 'Open Sans',
        width: '149px',
        height: '24px',
        left: 18,
        top: 13,

    },
    text2: {
        fontWeight: '700',
        fontFamily: 'Open Sans',
        width: '228px',
        height: '22px',
        top: 130,
        left: 18,
        Size: 14,
        lineHeight: 21

    },
    text3: {
        width: '296.31px',
        height: '23px',
        top: 130,
        left: 17.84,
        opacity: 0.6,
        fontWeight: '700',
        fontFamily: 'Open Sans',
        Size: 10,
        lineHeight: 21
    }
})