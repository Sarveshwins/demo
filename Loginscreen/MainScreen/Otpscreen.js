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
import { AppStorage, key } from "../AsynStorage/asyncStorage";
import validator from "validator";
import countryList from "country-list";
import { Picker } from "@react-native-picker/picker";

import CountryDetails from "./country.json";

const countries = countryList.getData();
const Otpscreen = ({ attemptUserRegister, UserRegisterData, navigation }) => {
  useEffect(() => {}, []);
  const [country, setCountry] = useState(CountryDetails[104].dialCode);
  const [data, setData] = useState({
    email: "", //pradeep@shivam.com",
    password: "", //12345678",
    first_name: "", //"Pradeep",
    last_name: "", //Kumar",
    phone: "", // "9431140126",
    country_code: CountryDetails[97].dialCode, // "+91",
    company_name: "", // "Shivam",
  });
  console.log("dataalert", data.country_code);

  const Validate = () => {
    if (!data.email.trim()) {
      alert("Please enter your email");

      return;
    } else if (!data.password.trim()) {
      alert("Please enter your password");
      return;
    } else if (!data.first_name.trim()) {
      alert("Please Enter first name");

      return;
    } else if (!data.last_name.trim()) {
      alert("Please Enter last name");

      return;
    } else if (!data.phone.trim()) {
      alert("Please Enter phone number");

      return;
    } else if (!data.country_code.trim()) {
      alert("Please Enter country code");

      return;
    } else if (!data.company_name.trim()) {
      alert("Please Enter company nae");

      return;
    } else if (!validator.isEmail(data.email)) {
      alert("Invalid email format");

      return;
    } else {
      attemptUserRegister({
        email: data.email, // "pradeep@shivam.com",
        password: data.password, // "12345678",
        first_name: data.first_name, // "Pradeep",
        last_name: data.last_name, // "Kumar",
        phone: data.phone, // "9431140126",
        country_code: data.country_code, // "+91",
        company_name: data.company_name, // "Shivam",

        extraData: async (loginRespo) => {
          console.log("loginResposss", loginRespo?.user_id);
          AppStorage.saveKey(
            key.SAVE_CLIENT_ID___,
            JSON.stringify(loginRespo?.user_id)
          );
          if (loginRespo?.user_id) {
            navigation.navigate("OtpPassword");
          }
        },
      });
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#3d7490" }}>Sign up</Text>

      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
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
          placeholderTextColor={"#6D6D6D"}
        />
      </View>

      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder=" Last-name"
          defaultValue={data.last_name}
          onChangeText={(val) =>
            setData({
              ...data,
              last_name: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder=" Company-name"
          defaultValue={data.company_name}
          onChangeText={(val) =>
            setData({
              ...data,
              company_name: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        />
      </View>

      <View style={styles.gat}>
        {/* <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder="Country-code"
          defaultValue={data.country_code}
          onChangeText={(val) =>
            setData({
              ...data,
              country_code: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        /> */}

        <View style={styles.row}>
          <Picker
            selectedValue={data.country_code}
            onValueChange={(val) =>
              setData({
                ...data,
                country_code: val,
              })
            }
          >
            {CountryDetails.map((country) => (
              <Picker.Item value={country.dialCode} label={country.name} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder="Phone"
          defaultValue={data.phone}
          onChangeText={(val) =>
            setData({
              ...data,
              phone: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder="Email"
          defaultValue={data.email}
          onChangeText={(val) =>
            setData({
              ...data,
              email: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        />
      </View>
      <View style={styles.gat}>
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder="Password"
          defaultValue={data.password}
          onChangeText={(val) =>
            setData({
              ...data,
              password: val,
            })
          }
          placeholderTextColor={"#6D6D6D"}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          Validate();
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
  flow: {
    // flex:1,
    // justifyContent:'center',

    backgroundColor: "#3d7490",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "80%",
    fontSize: 40,
    borderRadius: 20,
    height: 40,
  },
});
