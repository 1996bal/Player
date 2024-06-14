import { View } from 'react-native';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default function SecondRoute() {
    return (
        <View style={{ flex: 1, backgroundColor: '#1D1F3E' }} >
            <Header />
            <Body />
            <Footer />
        </View>
    )
}


