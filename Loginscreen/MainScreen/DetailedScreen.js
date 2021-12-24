import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptBookingDetailsActions } from "../actions/BookinDetails";

const DetailedScreen = ({ route, attemptBookingDetails }) => {
  const { item } = route.params;
  console.log("items", item?.BOOKING_ID);
  useEffect(() => {
    attemptBookingDetails({
      booking_id: item?.BOOKING_ID,
    });
  }, []);
  return (
    <View style={styles.mainContainer}>
      {/* <View style={{ height: 30, width: "100%" }}>
        <Image
          // style={{ height: 30, width: "50%" }}
          source={require("../../assets/header.png")}
        />
      </View> */}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
          Details
        </Text>
      </View>

      <View style={styles.secondaryView}>
        <Text style={styles.textStyle}>BOOKING ID1 : {item.BOOKING_ID}</Text>
        <Text style={styles.textStyle}>
          PLACE OF RECEIPT : {item.PLACE_OF_RECEIPT}
        </Text>
        <Text style={styles.textStyle}>
          PLACE OF DELIVERY : {item.PLACE_OF_DELIVERY}
        </Text>
        <Text style={styles.textStyle}>PICKUP DATE : {item.PICKUP_DATE}</Text>
        <Text style={styles.textStyle}>GOODS : {item.GOODS_TYPE}</Text>
      </View>
    </View>
  );
};

// export default DetailedScreen;

const mapStateToProps = function (state) {
  return {
    ...state.bookingDetailsReducer,
  };
};
export default connect(mapStateToProps, (dispatch) => ({
  attemptBookingDetails: bindActionCreators(
    attemptBookingDetailsActions.start,
    dispatch
  ),
}))(DetailedScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  secondaryView: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "50%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
  },
});
