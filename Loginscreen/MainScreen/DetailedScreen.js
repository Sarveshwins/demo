import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptBookingDetailsActions } from "../actions/BookinDetails";

const DetailedScreen = ({
  route,
  attemptBookingDetails,
  bookingDetailsData,
}) => {
  const { item } = route.params;
  console.log("items", item?.BOOKING_ID);
  useEffect(() => {
    attemptBookingDetails({
      booking_id: item?.BOOKING_ID,
    });
  }, []);
  console.log("mmmmmm", bookingDetailsData);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.mainContainer}>
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
        {/* <View style={{ width: "100%", height: "100%" }}> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={bookingDetailsData?.Mesaages}
            renderItem={({ item }) => {
              console.log(item, "llll");
              return (
                <View style={[styles.secondaryView, { marginTop: 20 }]}>
                  <Text style={styles.textStyle}>
                    POSTED BY : {item.POSTED_BY}
                  </Text>
                  <Text style={styles.textStyle}>
                    POSTED ON : {item.POSTED_ON}
                  </Text>
                  <Text style={styles.textStyle}>STATUS : {item.STATUS}</Text>
                  <Text style={styles.textStyle}>MESSAGE : {item.MESSAGE}</Text>
                </View>
              );
            }}
          />
        </View>
        {/* </View> */}
      </ScrollView>
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
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,

    padding: 10,
  },
  secondaryView: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: 250,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
  },
});
