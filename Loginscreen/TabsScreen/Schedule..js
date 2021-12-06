import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 45}}>
        {' '}
        So current Bookings
      </Text>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardcontainer: {
    alignSelf: 'center',
    width: deviceWidth - 25,
    height: 250,
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
    // flexDirection: 'coloumn',
    justifyContent: 'center',
  },
});

export default Schedule;
