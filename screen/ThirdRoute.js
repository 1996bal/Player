import {View} from 'react-native';
import Header from '../screen/ThirdRoute.component.js/Header'
import Body from '../screen/ThirdRoute.component.js/Body'
import Footer from '../screen/ThirdRoute.component.js/Footer'
export default function ThirdRoute(){
    return(
        <View style={{flex:1, backgroundColor:'green'}}>
            <Header />
            <Body />
            <Footer />
        </View>
    )
}
