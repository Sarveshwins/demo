import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppStorage } from "../AsynStorage/asyncStorage";
import { attemptinprogressBookingActions } from "../actions/inprogressBooking";
import AppBg from "../MainScreen/AppBg";
const Active = ({
  attemptCBooking,
  navigation,
  inbookingData,
  inbookingFetching,
}) => {
  useEffect(async () => {
    const client_Id = await AppStorage.getClientId();
    console.log("client id here under console1", client_Id);
    attemptCBooking({
      user_id: client_Id,
      extraData: async (loginRespo) => {
        console.log("booking", loginRespo);
      },
    });
  }, []);
  console.log("CbookingData", inbookingData);

  return (
    <View style={{ flex: 1 }}>
      <AppBg
        showHeader={false}
        navigation={navigation}
        loading={inbookingFetching}
      >
        <FlatList
          data={inbookingData}
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
                      BOOKING ID : {item.BOOKING_ID}
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

const mapStateToProps = function (state) {
  return {
    ...state.completebookingReducer,
  };
};
export default connect(mapStateToProps, (dispatch) => ({
  attemptCBooking: bindActionCreators(
    attemptinprogressBookingActions.start,
    dispatch
  ),
}))(Active);

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
