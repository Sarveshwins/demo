import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptUserRegisterActions } from "../actions/UserRegister";

const Otpscreen = ({ attemptUserRegister, UserRegisterData, navigation }) => {
  useEffect(() => {}, []);

  const [data, setData] = useState({
    email: "", //pradeep@shivam.com",
    password: "", //12345678",
    first_name: "", //"Pradeep",
    last_name: "", //Kumar",
    phone: "", // "9431140126",
    country_code: "", // "+91",
    company_name: "", // "Shivam",
  });
  console.log("dataalert", UserRegisterData);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          // onSubmitEditing={submitHandler}
          //   textContentType="emailAddress"
          //   clearButtonMode="always"
          //   defaultValue={data.username}
          placeholder=" First-name"
          //   onChangeText={val => handleUsenameChange(val)}
          //   keyboardType={'email-address'}
          //   value={data.username === '' ? '' : data.username}
          defaultValue={data.first_name}
          onChangeText={(val) =>
            setData({
              ...data,
              first_name: val,
            })
          }
        />
      </View>

      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder=" Last-name"
          defaultValue={data.last_name}
          onChangeText={(val) =>
            setData({
              ...data,
              last_name: val,
            })
          }
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder=" Company-name"
          defaultValue={data.company_name}
          onChangeText={(val) =>
            setData({
              ...data,
              company_name: val,
            })
          }
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder="Phone"
          defaultValue={data.phone}
          onChangeText={(val) =>
            setData({
              ...data,
              phone: val,
            })
          }
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder="Country-code"
          defaultValue={data.country_code}
          onChangeText={(val) =>
            setData({
              ...data,
              country_code: val,
            })
          }
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder="Email"
          defaultValue={data.email}
          onChangeText={(val) =>
            setData({
              ...data,
              email: val,
            })
          }
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder="Password"
          defaultValue={data.password}
          onChangeText={(val) =>
            setData({
              ...data,
              password: val,
            })
          }
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          attemptUserRegister({
            email: data.email, // "pradeep@shivam.com",
            password: data.password, // "12345678",
            first_name: data.first_name, // "Pradeep",
            last_name: data.last_name, // "Kumar",
            phone: data.phone, // "9431140126",
            country_code: data.country_code, // "+91",
            company_name: data.company_name, // "Shivam",

            extraData: async (loginRespo) => {
              console.log("loginResposss", loginRespo);
              //   AppStorage.saveKey(
              //     key.SAVE_CLIENT_ID,
              //     JSON.stringify(loginRespo?.user_id),
              //   );
            },
          });
          navigation.navigate("OtpPassword");
        }}
        style={styles.flow}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default Otpscreen

const mapStateToProps = function (state) {
  return {
    ...state.UserRegisterReducer,
  };
};
export default connect(mapStateToProps, (dispatch) => ({
  attemptUserRegister: bindActionCreators(
    attemptUserRegisterActions.start,
    dispatch
  ),
}))(Otpscreen);

const styles = StyleSheet.create({
  gat: {
    width: "80%",
    height: 40,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderColor: "#9B9B9B",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  flow: {
    backgroundColor: "#3d7490",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "80%",
    fontSize: 40,
    borderRadius: 20,
    height: 40,
    alignSelf: "center",
  },
});
