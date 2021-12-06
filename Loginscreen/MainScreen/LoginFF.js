import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profilescreen from '../TabsScreen/Profilescreen';
import Screennotification from '../TabsScreen/Screennotification';
import Drawercontent from './Drawercontent';

const Drawer = createDrawerNavigator();

const LoginFF = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Drawercontent {...props} />}>
      <Drawer.Screen
        name="profile"
        component={Profilescreen}
        options={{
          title: false,
          headerBackground: props => (
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: 250,
                }}>
                <Image
                  style={{height: 30, width:'100%'}}
                  source={require('../../assets/header.png')}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 19,

                    height: 50,
                    alignItems: 'center',
                    alignSelf: 'center',
                    textAlign: 'center',

                    fontWeight: 'bold',
                  }}>
                  {/* CONTICO SHIPPING AGENCY PRIVATE LIMITED */}
                </Text>
              </View>
            </SafeAreaView>
          ),
        }}
      />
      <Drawer.Screen name="Current Bookings" component={Screennotification} />
    </Drawer.Navigator>
  );
};

export default LoginFF;

const styles = StyleSheet.create({});
