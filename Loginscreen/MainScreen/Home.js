import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import validator from 'validator';
import { bindActionCreators } from 'redux';
import { attemptLoginActions } from '../actions/Login';
import FastImage from 'react-native-fast-image';
import AppBg from '../MainScreen/AppBg';
import { AppStorage, key } from '../AsynStorage/asyncStorage';
import Otpscreen from './Otpscreen';

const Home = ({ navigation, attemptLogin, loginFetching }) => {
  const iimage = require('../../assets/logo.png');
  const idea = require('../../assets/logo.png');

  const loginUsername = useRef();
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const login = async getData => {
    console.log('PAYLOAD', getData.username, getData.password);

    attemptLogin({
      email: 'pramod@softoasistech.com', //getData.username,
      password: 'ssp@2020', // getData.password,

      extraData: async loginRespo => {
        console.log('loginRespo', loginRespo?.user_id);
        AppStorage.saveKey(
          key.SAVE_CLIENT_ID,
          JSON.stringify(loginRespo?.user_id),
        );
        navigation.navigate('LoginFF');
      },
    });
  };
  const handleUsenameChange = val => {
    setData({
      ...data,
      username: val,
    });
  };
  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const onPress = (getdata, getType) => {
    if (!data.username.trim()) {
      alert('Please enter your email');

      return;
    }
    if (!data.password.trim()) {
      alert('Please enter your password');
      return;
    }
    if (!data.username.trim() && !data.password.trim()) {
      alert('Please Enter Email and Password');

      return;
    }
    if (!validator.isEmail(data.username)) {
      alert('Invalid email format');

      return;
    }
    login(data);
    submitHandler();
  };

  const submitHandler = () => {
    setData({
      username: '',
      password: '',
    });
  };
  return (
    <SafeAreaView style={styles.inst}>
      <AppBg navigation={navigation} showHeader={false} loading={loginFetching}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <FastImage source={iimage} style={{ width: 200, height: 200 }} />
          </View>
          <Text
            style={{
              color: '#3d7490',
              fontWeight: 'bold',
              marginTop: 60,
              fontSize: 30,
            }}>
            LOGIN
          </Text>
          <View
            style={{
              width: '80%',
              height: 40,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              justifyContent: 'center',
              borderColor: '#9B9B9B',
              borderRadius: 20,
              marginTop: 20,
            }}>
            <TextInput
              style={{
                flex: 1,
              }}
              // onSubmitEditing={submitHandler}
              textContentType="emailAddress"
              clearButtonMode="always"
              defaultValue={data.username}
              placeholder=" Enter your registered email"
              onChangeText={val => handleUsenameChange(val)}
              keyboardType={'email-address'}
              value={data.username === '' ? '' : data.username}
            />
          </View>
          <View
            style={{
              width: '80%',
              height: 40,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              alignItems: 'center',
              borderColor: '#9B9B9B',
              flexDirection: 'row',
              borderRadius: 20,
              marginTop: 15,
            }}>
            <TextInput
              style={{
                flex: 1,
              }}
              placeholder=" Password"
              secureTextEntry
              onChangeText={val => handlePasswordChange(val)}
              autoCapitalize={'none'}
              value={data.password === '' ? '' : data.password}
            />




          </View>



          <TouchableOpacity onPress={() => onPress(data)} style={styles.flow}>
            <Text style={{ fontSize: 20, color: 'white' }}>login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Otpscreen')} style={styles.flow}>
            <Text style={{ fontSize: 20, color: 'white' }}>Sign up</Text>
          </TouchableOpacity>

        </View>
      </AppBg>
    </SafeAreaView>
  );
};
const mapStateToProps = function (state) {
  return {
    ...state.LoginReducer,
  };
};
export default connect(mapStateToProps, dispatch => ({
  attemptLogin: bindActionCreators(attemptLoginActions.start, dispatch),
}))(Home);

const styles = StyleSheet.create({
  inst: {
    // backgroundColor: '#3f67c6',
    flex: 1,
  },
  flow: {
    // flex:1,
    // justifyContent:'center',

    backgroundColor: '#3d7490',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    fontSize: 40,
    borderRadius: 20,
    height: 40,
  },
  flowfassword: {
    // flex:1,
    justifyContent: 'center',
    marginTop: 20,
    width: '80%',
    fontSize: 40,
    borderRadius: 20,
    height: 40,
  },
});
