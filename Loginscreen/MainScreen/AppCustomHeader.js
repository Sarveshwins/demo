import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';

const AppCustomHeader = props => {
  const {
    headerTitle = '',
    showBack = true,
    showright = true,
    navigation,
    cartCount,
    rightIconProps,

    relation,
    setRelation,
  } = props;

  return (
    <View style={styles.conatainer}>
      <SafeAreaView></SafeAreaView>
    </View>
  );
};

export default AppCustomHeader;

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: 'white',
    // borderTopLeftRadius: 9,
    // borderTopRightRadius: 9
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleParent: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    textAlign: 'center',
  },
  drawerIconLeft: {
    position: 'relative',
  },
  drawerIconRight: {
    position: 'relative',
    marginRight: 6,
  },
  cartCountStyle: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: 0,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        paddingHorizontal: 3.5,
        paddingVertical: 0.2,
      },
      android: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  cartCountText: {
    fontWeight: 'bold',
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
    opacity: 0,
  },
  menuIconBg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
