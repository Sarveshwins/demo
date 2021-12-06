/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet, ActivityIndicator} from 'react-native';

//export default Loader = React.memo((props) => {
// export const AppLoader = ({visible}) => {
//   if (visible)
//     return (
//       <View
//         style={[
//           {
//             zIndex: 10,
//             position: 'absolute',
//             alignSelf: 'center',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '110%',
//             width: '120%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           },
//         ]}>
//         <FastImage
//           source={loaderPath}
//           style={{
//             borderRadius: 10,
//             height: 100,
//             width: 100,
//           }}
//         />
//       </View>
//     );
//   return null;
// };
export const AppLoader = ({visible}) => {
  if (visible)
    return (
      <View style={styles.conatainer}>
        <ActivityIndicator color={'white'} />
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  conatainer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
