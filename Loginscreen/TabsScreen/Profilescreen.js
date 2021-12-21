import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptBookingActions } from "../actions/Booging";
import AppBg from "../MainScreen/AppBg";
import { AppStorage } from "../AsynStorage/asyncStorage";
import Active from "./Active";
import Completed from "./Completed";
import { attemptCompletBookingActions } from "../actions/CompletedBooking";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ButtonData = [
  {
    title: "Planning",
  },
  {
    title: "Active",
  },
  {
    title: "Completed",
  },
];
const Profilescreen = ({
  attemptBooking,
  navigation,
  bookingData,
  bookingFetching,
  attemptCBooking,

  CbookingData,
  CbookingFetching,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(async () => {
    const client_Id = await AppStorage.getClientId();
    console.log("client id here under console1", client_Id);
    attemptBooking({
      user_id: client_Id,
      extraData: async (loginRespo) => {
        console.log("booking", loginRespo);
      },
    });
  }, [selectedIndex]);
  useEffect(async () => {
    const client_Id = await AppStorage.getClientId();
    console.log("client id here under console1", client_Id);
    attemptCBooking({
      user_id: client_Id,
      extraData: async (loginRespo) => {
        console.log("booking", loginRespo);
      },
    });
    if (CbookingData) {
      setFilteredDataSource(CbookingData);
      setMasterDataSource(CbookingData);
    }
  }, [selectedIndex]);

  const searchFilterFunction = (text) => {
    // getVcareList({
    //   search: text,
    // });
  };
  useEffect(() => {
    if (!search) {
      SearchFilteredData(search);
    }
  }, [search]);
  const SearchFilteredData = (text) => {
    searchFilterFunction___(text);
  };
  const searchFilterFunction___ = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item?.PLACE_OF_RECEIPT
          ? item?.PLACE_OF_RECEIPT.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  console.log("bookingData", CbookingData);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <AppBg
        navigation={navigation}
        showHeader={false}
        loading={bookingFetching}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
            borderRadius: 2,
            // backgroundColor: 'blue',
            height: 60,
          }}
        >
          <TextInput
            allowFontScaling={false}
            style={{ flex: 1, fontSize: 12, fontWeight: "300" }}
            placeholder="Search "
            onChangeText={(text) => {
              setSearch(text);
            }}
            placeholderTextColor={"black"}
            value={search}
          />
          <View
            style={{
              width: "20%",
              height: 50,
              backgroundColor: "black",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => SearchFilteredData(search)}>
              <Image source={require("../Assets/search.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
            borderRadius: 2,
          }}
        >
          {ButtonData.map((item, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                height: 44,
                // backgroundColor: 'red',
                borderColor: "black",
                borderWidth: 0.5,
                borderTopLeftRadius: index == 0 ? 10 / 2 : 0,
                borderBottomLeftRadius: index == 0 ? 10 / 2 : 0,
                borderTopRightRadius: index === 2 ? 10 / 2 : 0,
                borderBottomRightRadius: index === 2 ? 10 / 2 : 0,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10 / 2,
                  backgroundColor: selectedIndex === index ? "black" : null,

                  borderTopLeftRadius: index == 0 ? 10 / 2 : 0,
                  borderBottomLeftRadius: index == 0 ? 10 / 2 : 0,
                  borderTopRightRadius: index === 2 ? 10 / 2 : 0,
                  borderBottomRightRadius: index === 2 ? 10 / 2 : 0,
                }}
                onPress={() => setSelectedIndex(index)}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: selectedIndex === index ? "white" : "black",
                      fontSize: 17,
                      fontWeight: "500",
                      fontSize: 12,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {selectedIndex === 0 && (
            <FlatList
              data={bookingData}
              renderItem={({ item }) => {
                return (
                  <View style={styles.cardView}>
                    <View style={styles.secondView}>
                      <View
                        style={{
                          paddingLeft: 5,
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
                        <TouchableOpacity>
                          <Text style={styles.payNow}>View Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
          {selectedIndex === 1 && <Active />}
          {selectedIndex === 2 && (
            <Completed
              filteredDataSource={filteredDataSource}
              CbookingFetching={CbookingFetching}
              navigation={navigation}
            />
          )}
        </View>
      </AppBg>
    </View>
  );
};

const mapStateToProps = function (state) {
  return {
    ...state.bookingReducer,
    ...state.completebookingReducer,
  };
};
export default connect(mapStateToProps, (dispatch) => ({
  attemptBooking: bindActionCreators(attemptBookingActions.start, dispatch),
  attemptCBooking: bindActionCreators(
    attemptCompletBookingActions.start,
    dispatch
  ),
}))(Profilescreen);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 60,
  },
  cardView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
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
    backgroundColor: "lightgrey",
  },
  textstyle: {
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
