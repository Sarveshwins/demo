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

  const ListHeader = () => {
    //View to set in Header
    return (
      <View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
            Details
          </Text>
        </View>

        <View style={styles.secondaryView}>
          <Text style={styles.textStyleone}>
            BOOKING ID : {item.BOOKING_ID}
          </Text>
          <Text style={styles.textStyleone}>
            PLACE OF RECEIPT : {item.PLACE_OF_RECEIPT}
          </Text>
          <Text style={styles.textStyleone}>
            PLACE OF DELIVERY : {item.PLACE_OF_DELIVERY}
          </Text>
          <Text style={styles.textStyleone}>
            PICKUP DATE : {item.PICKUP_DATE}
          </Text>
          <Text style={styles.textStyleone}>GOODS : {item.GOODS_TYPE}</Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Mesaages
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        {/* <View style={{ width: "100%", height: "100%" }}> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={bookingDetailsData?.Mesaages}
            ListHeaderComponent={ListHeader}
            renderItem={({ item }) => {
              console.log(item, "llll");
              return (
                <View style={[styles.secondaryView, { marginTop: 20 }]}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.textStyle}>
                      POSTED BY : {item.POSTED_BY}
                    </Text>
                    <Text style={styles.textStyle}>
                      POSTED ON : {item.POSTED_ON}
                    </Text>
                  </View>

                  <Text style={styles.textStyle}>STATUS : {item.STATUS}</Text>
                  <Text style={styles.textStyle}>MESSAGE : {item.MESSAGE}</Text>
                </View>
              );
            }}
          />
        </View>
        {/* </View> */}
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
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  secondaryView: {
    backgroundColor: "#7b94a8",
    width: "100%",
    height: "auto",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    width: "50%",
    color: "white",
  },
  textStyleone: {
    fontSize: 18,
    color: "white",
  },
});
