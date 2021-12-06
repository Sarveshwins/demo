import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoginFF from './LoginFF';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {attemptprofileActions} from '../actions/userProfile';
import {AppStorage, key} from '../AsynStorage/asyncStorage';
const Drawercontent = ({navigation, attemptUserProfile, userData}) => {
  useEffect(async () => {
    const client_Id = await AppStorage.getClientId();
    console.log('client id here under console', client_Id);
    attemptUserProfile({
      user_id: client_Id,
      extraData: async loginRespo => {
        console.log('userData', loginRespo);
      },
    });
  }, []);

  const onPress = () => {
    navigation.navigate('home');
    AppStorage.removeItemKey(key.SAVE_CLIENT_ID);
  };
  console.log('userData', userData);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.drawercontent}>
        <View style={styles.userinfo}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: userData[0]?.image,
              }}
            />
            <View style={{marginLeft: 15}}>
              <Title style={{fontSize: 15}}>
                {userData[0]?.first_name + userData[0]?.last_name}
              </Title>
              <Caption style={{fontSize: 15}}>
                {userData[0]?.company_name}
              </Caption>
              <Text style={{fontSize: 15}}>ID No. {userData[0]?.id}</Text>
              <Text style={{marginTop: 3, fontSize: 15}}>
                Phone No. {userData[0]?.phone}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <Drawer.Section style={styles.drawersect}>
          <DrawerItem
            icon={({color, size}) => (
              //<Icon name="home" color={color} size={size} />
              <Image
                source={require('../../assets/dashboard.png')}
                style={{width: 30, height: 30}}
              />
            )}
            label="Dashbord"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Image
                source={require('../../assets/booking.png')}
                style={{width: 30, height: 30}}
              />
            )}
            label="My Booking"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Image
                source={require('../../assets/user.png')}
                style={{width: 30, height: 30}}
              />
            )}
            label="My Profile"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Image
                source={require('../../assets/logout.png')}
                style={{width: 30, height: 30}}
              />
            )}
            label="Logout"
            onPress={() => onPress()}
          />
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = function (state) {
  return {
    ...state.userProfileReducer,
  };
};
export default connect(mapStateToProps, dispatch => ({
  attemptUserProfile: bindActionCreators(attemptprofileActions.start, dispatch),
}))(Drawercontent);

const styles = StyleSheet.create({
  drawercontent: {
    // flex: 1,
    height: 150,
    //backgroundColor: 'red',
  },
  userinfo: {
    paddingLeft: 20,
  },
  drawersect: {
    // marginTop:1
    marginBottom: 195,
  },
});
