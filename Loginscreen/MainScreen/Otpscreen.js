import React, { useEffect } from "react";
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

const Otpscreen = ({ attemptUserRegister, UserRegisterData }) => {
  useEffect(() => {
    attemptUserRegister({
      email: "pramod36@softoasistech.com", //getData.username,
      password: "ssp@2020",
      First_name: "Pradeep",
      last_name: "Kumar",
      phone: "9431140126",
      country_code: "+91",
      company_name: "Shivam",
      // getData.password,

      extraData: async (loginRespo) => {
        console.log("loginRespo", loginRespo);
        //   AppStorage.saveKey(
        //     key.SAVE_CLIENT_ID,
        //     JSON.stringify(loginRespo?.user_id),
        //   );
        //   navigation.navigate('LoginFF');
      },
    });
  }, []);
  console.log("dataalert", UserRegisterData);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "#3d7490",
          fontWeight: "bold",
          marginTop: 40,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Sign Up
      </Text>
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
