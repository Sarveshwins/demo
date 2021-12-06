import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {AppLoader} from './AppLoader';

import AppCustomHeader from './AppCustomHeader';
const AppBg = props => {
  const {
    children,
    showHeader = false,
    title = '',
    loading = false,
    showBack = true,
    showright = true,
    navigation,
    rightIconProps,
  } = props;
  return (
    <View style={styles.conatainer}>
      {showHeader ? (
        <AppCustomHeader
          style={styles.headStyle}
          headerTitle={title}
          showBack={showBack}
          showright={showright}
          navigation={navigation}
          rightIconProps={rightIconProps}
        />
      ) : null}
      <View style={styles.backgoroundContainer}>
        {/* <View style={styles.image}> */}
        <SafeAreaView style={styles.pageContainer}>{children}</SafeAreaView>
        {/* </View>  */}
        <AppLoader visible={loading} />
      </View>
    </View>
  );
};

export default connect(state => ({}), null)(AppBg);

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  headStyle: {height: 40},
  backgoroundContainer: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    height: '55%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  pageContainer: {flex: 1},
});
