import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailedScreen = ({ route }) => {
  const { item } = route.params;
  console.log("items", item);

  return (
    <View style={styles.mainContainer}>
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

export default DetailedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
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
