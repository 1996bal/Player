
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FirstRoute from './FirstRoute'
import SecondRoute  from './SecondRoute';
import ThirdRoute from './ThirdRoute';
import FourthRoute from './FourthRoute'



export default function TabViewExample() {
  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Radio' },
      { key: 'second', title: 'Home' },
      { key: 'third', title: 'Profile' },
      { key: 'fourth', title: 'Search' },


    ],
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white', width: 0 }}
      style={{ backgroundColor: '#111536', height: 100, }}
     
      renderLabel={({ route, focused }) => (
        <View style={{ backgroundColor: '#1D1F3E', height: 50, width: 105, marginTop: 40, }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: focused ? '#1D1F3E' : '#111536',
              width: 102,
              height: 40,
              marginTop: -20,

              borderRadius: focused ? 40 : 20,
              
            }}>

            <Text style={{ color: focused ? '#FF7A8A' : '#FFFFFF', fontWeight: 700, fontSize: 14, fontFamily: 'Open Sans', }}>
              {route.title}
            </Text>

          </View>
        </View>
      )}
    />
  );

  return (
    <TabView
      navigationState={state}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,


      })}
      onIndexChange={() => null}
      initialLayout={{ width: Dimensions.get('window').width }}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:0
    
  },
  scene: {
    flex: 1,
  },
});
