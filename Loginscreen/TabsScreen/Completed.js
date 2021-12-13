import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppBg from "../MainScreen/AppBg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { attemptCompletBookingActions } from "../actions/CompletedBooking";
const Completed = ({ filteredDataSource, navigation, CbookingFetching }) => {
  console.log("CbookingData", filteredDataSource);
  return (
    <View style={{ flex: 1 }}>
      <AppBg
        showHeader={false}
        navigation={navigation}
        loading={CbookingFetching}
      >
        <FlatList
          data={filteredDataSource}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardView}>
                {/* <View style={styles.firstView}>
                          <Image source={require('../../assets/B35D.png')} />
                        </View> */}
                <View style={styles.secondView}>
                  <View
                    style={{
                      paddingLeft: 5,
                      // justifyContent: 'space-around',
                      flex: 1,
                    }}
                  >
                    <Text style={styles.textstyle}>
                      BOOKING ID1 : {item.BOOKING_ID}
                    </Text>
                    <Text style={styles.textstyle}>
                      PLACE OF RECEIPT : {item.PLACE_OF_RECEIPT}
                    </Text>
                    <Text style={styles.textstyle}>
                      PLACE OF DELIVERY : {item.PLACE_OF_DELIVERY}
                    </Text>
                    <Text style={styles.textstyle}>
                      PICKUP DATE : {item.PICKUP_DATE}
                    </Text>
                    <Text style={styles.textstyle}>
                      {" "}
                      GOODS : {item.GOODS_TYPE}
                    </Text>
                  </View>
                  <View style={styles.butonView}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("DetailedScreen", { item: item })
                      }
                    >
                      <Text style={styles.payNow}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </AppBg>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 60,
    // marginBottom:20,
  },
  cardView: {
    flex: 1,
    width: "100%",
    //  height: 150,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',

    marginVertical: 6,
  },
  firstView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondView: {
    flex: 2.5,
    justifyContent: "space-between",
    // alignItems: 'center',
    backgroundColor: "lightgrey",
  },
  textstyle: {
    //fontWeight: 'bold',
    fontSize: 18,
    margin: 3,
    color: "black",
  },
  payNow: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  butonView: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",

    height: 30,
  },
  toView: {
    justifyContent: "center",
    paddingLeft: 20,
    width: "100%",
    height: 60,

    backgroundColor: "lightblue",
  },
});
