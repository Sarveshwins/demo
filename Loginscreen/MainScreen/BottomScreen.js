import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomScreen = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default BottomScreen

const styles = StyleSheet.create({})






// import React from 'react';
// import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Homescreen from '../TabsScreen/Homescreen';
// import Profilescreen from '../TabsScreen/Profilescreen';
// import Schedule from '../TabsScreen/Schedule.';
// import Screennotification from '../TabsScreen/Screennotification';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';

// const Tab = createBottomTabNavigator();
// const LogoTitle = ({text}) => {
//   const idea = require('../../assets/logo.png');

//   return (
//     <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
//       <View>
//         {/* <Image source={idea} style={{marginLeft: 10}} /> */}
//         <Text>{text}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// const BottomScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerTitle: false,
//         headerBackground: props => <LogoTitle {...props} text="" />,
//         headerShown: true,
//         title: true,
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Homescreen}
//         options={{
//           tabBarLabel: 'Home',

//           tabBarIcon: ({color, size, focused}) => (
//             <View>
//               {focused ? (
//                 <View
//                   style={{
//                     // width: 80,
//                     // height: 35,
//                     borderRadius: 30,
//                     paddingHorizontal: 13,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: 'rgba(109, 243, 200, 0.8)',
//                     flexDirection: 'row',
//                   }}>
//                   <MaterialCommunityIcons
//                     name="home"
//                     color={color}
//                     size={size}
//                   />
//                   <Text style={{color: 'dodgerblue'}}>DashBoard</Text>
//                 </View>
//               ) : (
//                 <MaterialCommunityIcons name="home" color={color} size={size} />
//               )}
//             </View>
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="MySchedule"
//         component={Schedule}
//         options={{
//           tabBarLabel: 'my schedule',
//           tabBarIcon: ({color, size}) => (
//             <Entypo name="clock" color={color} size={size} />
//           ),
//         }}
//       /> */}
//       <Tab.Screen
//         name="MySchedule"
//         component={Schedule}
//         options={{
//           tabBarLabel: 'MySchedule',

//           tabBarIcon: ({color, size, focused}) => (
//             <View>
//               {focused ? (
//                 <View
//                   style={{
//                     // width: 80,
//                     // height: 35,
//                     borderRadius: 30,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     paddingHorizontal: 13,
//                     backgroundColor: 'rgba(109, 243, 200, 0.8)',
//                     flexDirection: 'row',
//                   }}>
//                   <Entypo name="clock" color={color} size={size} />
//                   <Text style={{color: 'dodgerblue'}}>Booking</Text>
//                 </View>
//               ) : (
//                 <Entypo name="clock" color={color} size={size} />
//               )}
//             </View>
//           ),
//         }}
//       />

//       {/* <Tab.Screen
//         name="Notification"
//         component={Screennotification}
//         options={{
//           tabBarLabel: 'Notification',

//           tabBarIcon: ({color, size, focused}) => (
//             <View>
//               {focused ? (
//                 <View
//                   style={{
//                     // width: '100%',
//                     // height: '80%',
//                     borderRadius: 30,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     paddingHorizontal: 13,
//                     backgroundColor: 'rgba(109, 243, 200, 0.8)',
//                     flexDirection: 'row',
//                   }}>
//                   <MaterialCommunityIcons
//                     name="bell"
//                     color={color}
//                     size={size}
//                   />
//                   <Text style={{color: 'dodgerblue', fontSize: 10}}>
//                     Notification
//                   </Text>
//                 </View>
//               ) : (
//                 <MaterialCommunityIcons name="bell" color={color} size={size} />
//               )}
//             </View>
//           ),
//         }}
//       /> */}

//       {/* <Tab.Screen
//         name="MyProfile"
//         component={Profilescreen}
//         options={{
//           tabBarLabel: 'My profile',
//           tabBarIcon: ({color, size}) => (
//             <Entypo name="user" size={size} color={color} />
//           ),
//         }}
//       /> */}
//       {/* <Tab.Screen
//         name="MyProfile"
//         component={Profilescreen}
//         options={{
//           tabBarLabel: 'My profile',

//           tabBarIcon: ({color, size, focused}) => (
//             <View>
//               {focused ? (
//                 <View
//                   style={{
//                     // width: '100%',
//                     // height: '100%',
//                     borderRadius: 30,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     paddingHorizontal: 13,
//                     backgroundColor: 'rgba(109, 243, 200, 0.8)',
//                     flexDirection: 'row',
//                   }}>
//                   <Entypo name="user" color={color} size={size} />
//                   <Text style={{color: 'dodgerblue', fontSize: 10}}>
//                     MY profile
//                   </Text>
//                 </View>
//               ) : (
//                 <Entypo name="user" color={color} size={size} />
//               )}
//             </View>
//           ),
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// };

// export default BottomScreen;

// const styles = StyleSheet.create({});

// // import React from 'react'
// // import { StyleSheet, Text, View } from 'react-native'

// // const BottomScreen = () => {
// //     return (
// //         <View>
// //             <Text></Text>
// //         </View>
// //     )
// // }

// // export default BottomScreen

// // const styles = StyleSheet.create({})
