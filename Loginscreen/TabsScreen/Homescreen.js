import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const Homescreen = () => {
  const iimage = require('../../assets/logo.png');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FastImage source={iimage} style={{width: 200, height: 200}} />
      </View>
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
          placeholder="Name"
        />
      </View>
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
          placeholder="Email"
        />
      </View>

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
          placeholder="Phone"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homescreen;
