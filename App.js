import React from 'react';

import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './Loginscreen/MainScreen/StackScreen';
// import BottomScreen from './Loginscreen/MainScreen/BottomScreen';
import configureStore from './Loginscreen/routes/ConfigureStore';
import {Provider, useSelector} from 'react-redux';
const store = configureStore();
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStatusBar backgroundColor="#2196F3" barStyle="light-content" />

        <StackScreen />
      </Provider>

      {/* <BottomScreen/> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
